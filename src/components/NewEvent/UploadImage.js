import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  Box,
  Typography,
  Button,
  ListItem,
  withStyles,
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { UPLOADIMAGE } from "../../graphql/mutations";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
    width: 300,
    margin: "auto",
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const UploadImages = () => {
  const [uploadImage, { error }] = useMutation(UPLOADIMAGE);
  const [state, setState] = useState({
    currentFile: undefined,
    previewImage: undefined,
    progress: 0,

    message: "",
    isError: false,
    imageInfos: [],
  });

  // useEffect(() => {

  // }, [])

  // componentDidMount() {
  //   UploadService.getFiles().then((response) => {
  //     this.setState({
  //       imageInfos: response.data,
  //     });
  //     console.log(response.data);
  //   });
  // }

  const selectFile = (event) => {
    setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: "",
    });
    console.log("event.target.files", event.target.files);
    console.log("url", URL.createObjectURL(event.target.files[0]));
  };

  const upload = async (event) => {
    console.log(state.currentFile.name, typeof state.currentFile.size);
    setState({
      progress: 0,
    });

    try {
      const { data } = await uploadImage({
        variables: {
          imageUploadInput: {
            name: state.currentFile.name,
            size: state.currentFile.size,
            type: state.currentFile.type,
          },
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      setState({
        progress: 0,
        message: "Could not upload the image!",
        currentFile: undefined,
        isError: true,
      });
    }

    //   UploadService.upload(this.state.currentFile, (event) => {
    //     this.setState({
    //       progress: Math.round((100 * event.loaded) / event.total),
    //     });
    //   })
    //     .then((response) => {
    //       this.setState({
    //         message: response.data.message,
    //         isError: false,
    //       });
    //       return UploadService.getFiles();
    //     })
    //     .then((files) => {
    //       this.setState({
    //         imageInfos: files.data,
    //       });
    //     })
    //     .catch((err) => {
    //       this.setState({
    //         progress: 0,
    //         message: "Could not upload the image!",
    //         currentFile: undefined,
    //         isError: true,
    //       });
    //     });
  };

  const { currentFile, previewImage, progress, message, imageInfos, isError } =
    state;

  return (
    <div className="mg20">
      <label htmlFor="btn-upload">
        <input
          id="btn-upload"
          name="btn-upload"
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={selectFile}
        />
        <Button className="btn-choose" variant="outlined" component="span">
          Choose Image
        </Button>
      </label>
      <div className="file-name">{currentFile ? currentFile.name : null}</div>
      <Button
        className="btn-upload"
        color="primary"
        variant="contained"
        component="span"
        disabled={!currentFile}
        onClick={(e) => upload(e)}
      >
        Upload
      </Button>

      {currentFile && (
        <Box className="my20" display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
          <Box minWidth={35}>
            <Typography
              variant="body2"
              color="textSecondary"
            >{`${progress}%`}</Typography>
          </Box>
        </Box>
      )}

      {previewImage && (
        <div>
          <img
            className="preview my20"
            width="100%"
            src={previewImage}
            alt=""
          />
        </div>
      )}

      {message && (
        <Typography
          variant="subtitle2"
          className={`upload-message ${isError ? "error" : ""}`}
        >
          {message}
        </Typography>
      )}

      <Typography variant="h6" className="list-header"></Typography>
      <ul className="list-group">
        {imageInfos &&
          imageInfos.map((image, index) => (
            <ListItem divider key={index}>
              <img
                src={image.url}
                alt={image.name}
                height="30px"
                className="mr20"
              />
              <a href={image.url}>{image.name}</a>
            </ListItem>
          ))}
      </ul>
    </div>
  );
};

export default UploadImages;
