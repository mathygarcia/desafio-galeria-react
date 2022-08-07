import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-general">
      <Header title = "Galería de Imágenes con React"/>
      <div className="galeria-imagenes">
        <Card 
          url = "https://i.postimg.cc/cJwqKYYj/city.jpg" 
          title = "City Up" 
          description = "ciudad de algun lugar"/>
        <Card 
          url = "https://i.postimg.cc/44Q1f1LM/church.jpg" 
          title = "church" 
          description = "alguna iglesia de algun lugar"/>
        <Card 
          url = "https://i.postimg.cc/L6hgckrj/mountain.jpg" 
          title = "mountain" 
          description = "alguna montaña de algun lugar"/>
        <Card 
          url = "https://i.postimg.cc/ZYsCxBCn/sky.jpg" 
          title = "sky" 
          description = "el cielo azul de algun lugar"/>
        <Card 
          url = "https://i.postimg.cc/x1Dj6KYf/snowy-mountain.jpg" 
          title = "snowy mountain" 
          description = "montaña nevada de algun lugar"/>
        <Card 
          url = "https://i.postimg.cc/qgfrZdPb/well.jpg" 
          title = "well" 
          description = "pozo abandonado"/>
      </div>
      <Footer/>
    </div>
    
  );
}
export default App;
