import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import CharityCard from "../components/CharityCard";
import { useQuery } from "@apollo/client";

const Home = () => {
  const { data } = useQuery;
  return (
    <MainContainer>
      <Header title="All Charity Cards" />
      <div className="Card">
        {data.cards.map(card => {
          return <CharityCard title={card.title} imageUrl={card.imageUrl} />;
        })}
      </div>
    </MainContainer>
  );
};
export default Home;
