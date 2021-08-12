import "./charityCard.css";

const CharityCard = ({ props, title, imageUrl }) => {
  return (
    <div className="card">
      <div>
        <h3 className="heading">{title}</h3>
        <figure>
          <img
            className="img"
            src={imageUrl}
            alt="charity"
            // width="600"
            // height="400"
          />
        </figure>
      </div>
      <div className="charity-info-container">
        <button type="button">{title}</button>
      </div>
    </div>
  );
};
export default CharityCard;

/* import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CharityCard = ({ title, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={imageUrl} />
        <Button variant="primary">{title}</Button>
      </Card.Body>
    </Card>
  );
}; */
