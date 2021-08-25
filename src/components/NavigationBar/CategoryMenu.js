import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import Chip from "@material-ui/core/Chip";

export default function SimpleMenu() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    history.push(`/events/${event.currentTarget.innerText}`);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        // aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "#f8cf61" }}
        fontSize="small"
      >
        <Chip label="Category" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Animals</MenuItem>
        <MenuItem onClick={handleClose}>Environmental</MenuItem>
        <MenuItem onClick={handleClose}>Art and Culture</MenuItem>
        <MenuItem onClick={handleClose}>Health</MenuItem>
        <MenuItem onClick={handleClose}>Education</MenuItem>
        <MenuItem onClick={handleClose}>International</MenuItem>
      </Menu>
    </div>
  );
}
