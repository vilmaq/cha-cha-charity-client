import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    color: "#fff !important",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: "#fff",
    "&:before": {
      borderColor: "#fff",
    },
    "&:after": {
      borderColor: "#fff",
    },
  },
}));

const CategoryMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const { category } = useParams();
  const [eventCategory, setEventCategory] = useState(category || "all");

  const handleChange = (event) => {
    setEventCategory(event.target.value);
    history.push(`/events/${event.target.value}`);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={eventCategory}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="Animals">Animals</MenuItem>
        <MenuItem value="Environmental">Environmental</MenuItem>
        <MenuItem value="Art">Art and Culture</MenuItem>
        <MenuItem value="Health">Health</MenuItem>
        <MenuItem value="Education">Education</MenuItem>
        <MenuItem value="International">International</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoryMenu;
