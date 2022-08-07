import "../css/header.css";

const Header = ({ title = "titulo por defecto" }) => {
  return (
    <div className="container">
      <h1 className="titulo">{title}</h1>
    </div>
  );
};

export default Header;
