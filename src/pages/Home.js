import { Container } from "@material-ui/core";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import MainContainer from "../components/MainContainer";
import { eventCategories } from "../data";

import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="main">
        <h1 className="header">Cha-Cha-Charity!</h1>
        <section className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </section>
      </div>
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
