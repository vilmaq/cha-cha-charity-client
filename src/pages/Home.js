import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import CharityCard from "../components/CharityCard";
// import { useQuery } from "@apollo/client";
// import { title, imageUrl } from "../components/CharityCard";

const Home = () => {
  // const charityCard = useQuery();
  return (
    <MainContainer>
      <Header title="All Charity Cards" />
      {/* <div className="Card">
        {charityCard.card.map(card => {
          return <CharityCard title={card.title} imageUrl={card.imageUrl} />;
        })}
      </div> */}
    </MainContainer>
  );
};
export default Home;
