import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
const Home = () => {
  return (
    <MainContainer>
      <Header title="All Charity Cards" />
      <div className="d-flex flex-wrap justify-content-center">
        {data.cards.map((card) => {
          return <CharityCards title={card.title} imageUrl={card.imageUrl} />;
        })}
      </div>
    </MainContainer>
  );
};
export default Home;
