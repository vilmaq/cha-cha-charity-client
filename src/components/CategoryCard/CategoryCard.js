import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";

import dog from "../../assets/images/illustrations/whole-images/dog.png";
import environmental from "../../assets/images/illustrations/whole-images/pablo-201.png";
import arts from "../../assets/images/illustrations/whole-images/pablo-956.png";
import health from "../../assets/images/illustrations/whole-images/healthy.png";
import education from "../../assets/images/illustrations/whole-images/school.png";
import mrworldwide from "../../assets/images/illustrations/whole-images/pablo-873.png";

// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Collapse from "@material-ui/core/Collapse";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// import animal from "../assets/image/animal.png";

const categoryImages = {
  animals: dog,
  environmental: environmental,
  arts: arts,
  health: health,
  education: education,
  international: mrworldwide,
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },

  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },

  container: {
    margin: 10,
    // justifyContent: "left",
  },

  expand: {
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CategoryCard({ title, image }) {
  const classes = useStyles();
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              CCC
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          className={classes.media}
          image={categoryImages[image]}
          title={title}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>{" "}
          <Button
            className={classes.expand}
            variant="contained"
            color="secondary"
          >
            More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
