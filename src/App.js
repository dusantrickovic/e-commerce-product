import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';
import close from './images/icon-close.svg';
import './App.css';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import { useState } from 'react';
import productimage1 from './images/image-product-1.jpg';
import ProductPreview from './components/ProductPreview';

function App() {
  const [image, setImage] = useState(productimage1);
  const [display, setDisplay] = useState('hidden');
  const imagePreview = document.getElementById("image-preview");

  const exitView = () => {
    imagePreview.setAttribute("className", "hidden");
  }
  
  const preview = () => {
    imagePreview.setAttribute("className", "")
  } 

  return (
    <div className="App">
     
      <ProductPreview close={close} image={image} setImage={setImage} display={display} setDisplay={setDisplay} />
      
      <Header logo={logo} cart={cart} avatar={avatar} />
      <br />
      <ProductImages image={image} setImage={setImage} display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
