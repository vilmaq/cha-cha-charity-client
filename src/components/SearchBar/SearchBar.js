import React, { useState } from "react";
import { Toolbar, AppBar, TextField } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SearchIcon from "@material-ui/icons/Search";

import ReactHookFormSelect from "../ReactHookFormSelect";
import { FolderOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: 16,
  },
  Container: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleSearchChange = (event) => {};

  const { handleSubmit } = useForm();

  const onSubmit = (formData) => {};

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}></form>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Event"
              variant="standard"
            />
          </div>
          <Box component="div" m={1} className={classes.formTitle}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              size="large"
            >
              Submit
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <form />
    </Container>
  );
};

export default SearchBar;
