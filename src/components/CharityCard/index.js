import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./charitycard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  // const classes = useStyles();

  return (
    <div className="charity-card-container">
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="h2" className="heading">
            Charity Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="charity-info-container">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="learnMore button">
        <Button size="medium" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div> 
  );
}