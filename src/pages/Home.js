import CategoryCard from "../components/CategoryCard/CategoryCard";
import MainContainer from "../components/MainContainer";
import { eventCategories } from "../data";

const Home = () => {
  return (
    <MainContainer>
      {eventCategories.map(eventCategory => {
        return <CategoryCard {...eventCategory} />;
      })}
    </MainContainer>
  );
};

export default Home;
