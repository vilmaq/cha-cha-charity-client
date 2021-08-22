import { useState } from "react";
import S3 from "react-aws-s3";
import ImageUploading from "react-images-uploading";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 241,
  },
  title: {
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
});

const ImageUpload = ({
  images,
  imageUrl,
  setImages,
  setImageUrl,
  filePrefix,
}) => {
  const classes = useStyles();

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onUpload = async () => {
    const file = images[0].file;
    const fileName = `${filePrefix}${file.name}`;

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
          </CardActions>
        </Card>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
