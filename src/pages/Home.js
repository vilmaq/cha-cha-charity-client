import { Container } from "@material-ui/core";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MainContainer from "../components/MainContainer";
import { eventCategories } from "../data";

const Home = () => {
  return (
    <MainContainer>
      {eventCategories.map(eventCategory => {
        return (
          <div>
            <Container>
              <CategoryCard {...eventCategory} />
            </Container>
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Home;
