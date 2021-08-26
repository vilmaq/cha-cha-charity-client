import S3 from "react-aws-s3";
import ImageUploading from "react-images-uploading";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { MOBILE_BREAKPOINT } from "../../mediaQueries";

const ImageUpload = ({
  images,
  imageUrl,
  setImages,
  setImageUrl,
  filePrefix,
}) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    media: {
      display: "block",
      height: 241,
      marginLeft: isMobile ? "16px" : "25%",
      marginRight: isMobile ? "16px" : "25%",
    },
    title: {
      textAlign: "center",
      paddingTop: 8,
      paddingBottom: 8,
    },
  });

  const classes = useStyles();

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onUpload = async () => {
    const file = images[0].file;
    let fileName = `${filePrefix}${file.name.replace(/\s/g, "")}`;
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    };

    const ReactS3Client = new S3(config);

    const s3Data = await ReactS3Client.uploadFile(file, fileName);

    if (s3Data.status === 204) {
      setImageUrl(s3Data.location);
      setImages([]);
    } else {
      console.log("failed to upload image");
    }
  };

  return (
    <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        <Card className={classes.root}>
          <CardActionArea>
            {images.length !== 0 && (
              <>
                <Typography
                  variant="h6"
                  display="block"
                  className={classes.title}
                >
                  Preview
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={images[0]["data_url"]}
                />
              </>
            )}

            {imageUrl && (
              <>
                <Typography
                  variant="h6"
                  display="block"
                  className={classes.title}
                >
                  Uploaded Image
                </Typography>
                <CardMedia className={classes.media} image={imageUrl} />
              </>
            )}
            <CardContent>
              {imageUrl && (
                <Typography variant="caption" display="block" gutterBottom>
                  {imageUrl}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              {imageList.length === 0 && (
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={onImageUpload}
                >
                  <PhotoCamera />
                </IconButton>
              )}
              {imageList.length !== 0 && (
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  onClick={onImageRemoveAll}
                  disableElevation
                >
                  Delete
                </Button>
              )}
              {imageList.length !== 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  onClick={onUpload}
                  disableElevation
                >
                  Upload
                </Button>
              )}
            </Grid>
          </CardActions>
        </Card>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
