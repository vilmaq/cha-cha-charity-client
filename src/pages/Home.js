import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MainContainer from "../components/MainContainer";
import { eventCategories } from "../data";
import "./home.css";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  intro: {
    width: 450,
    padding: 20,
    margin: 20,
    textAlign: "center",
  },
  eventHeader: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="main">
        <Typography>
          <Typed
            className="text-typed"
            strings={[
              "We only have what we give",
              "Cha-Cha-Charity, where charity begins!",
              "Only a life lived for others is a life worthwhile",
              "No act of kindness, no matter how small, is ever wasted",
              "We can't help everyone, but everyone can help someone",
              "It is when you give of yourself that you truly give",
              "No one need wait a single moment to improve the world",
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </Typography>
        <section className={classes.intro}>
          <Typography variant="h5">Welcome to Cha-Cha-Charity! </Typography>
          <Typography>
            The best way to engage with charitable events, or even host your own
            and support a worthy cause. Whether that might be as a Volunteer,
            Business or a Charity.
          </Typography>
          <Typography>
            Our main aim is to facilitate connections between those seeking to
            make a positive difference in the world.
          </Typography>
          <Typography variant="h6">Join us in making it happen!</Typography>
        </section>
      </div>
      <Typography className={classes.eventHeader} variant="h4">
        Explore some of our events!
      </Typography>
      <MainContainer>
        {eventCategories.map((eventCategory) => {
          return (
            <div>
              <Container>
                <CategoryCard {...eventCategory} />
              </Container>
            </div>
          );
        })}
      </MainContainer>
    </div>
  );
};
export default Home;
