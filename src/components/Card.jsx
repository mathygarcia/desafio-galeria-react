import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/card.css";

const tarjeta = ({
  url = "https://i.postimg.cc/cJwqKYYj/city.jpg",
  title = "defaut",
  description = "defaut",
}) => {
  return (
    <Card className="tarjeta">
      <Card.Img className="imagen" variant="top" src={url} />
      <Card.Body className="card-body">
        <Card.Title>
          <h4>{title}</h4>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success">Dar apoyo</Button>
      </Card.Body>
    </Card>
  );
};
export default tarjeta;
