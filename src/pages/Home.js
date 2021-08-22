import { Container } from "@material-ui/core";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import CharityCard from "../components/CharityCard";
import MainContainer from "../components/MainContainer";
import { eventCategories } from "../data";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="main">
        <h1 className="header">Cha-Cha-Charity!</h1>
        <section className="intro">
          Welcome to cha-cha-charity and Enjoy connecting and meeting other's.
          Cha-cha-charity is a website which connects a charity to a company and
          volunteers. Anyone could click and add a charity event or participate
          in any event easily through our website. Anyone could save the events
          after completing the sign up or login.
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
