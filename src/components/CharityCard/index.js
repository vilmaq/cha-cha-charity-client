import { Card } from "react-bootstrap";
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
};

export default CharityCard;
