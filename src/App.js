import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import cartbtn from './images/cart-btn.svg';
import avatar from './images/image-avatar.png';
import close from './images/icon-close.svg';
import './App.css';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import { useState } from 'react';
import productimage1 from './images/image-product-1.jpg';
import ProductPreview from './components/ProductPreview';
import AboutProduct from './components/AboutProduct';

function App() {
  const [image, setImage] = useState(productimage1);
  const [display, setDisplay] = useState('hidden');
  const [imagePreview, setImagePreview] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="App">
     
      <ProductPreview close={close} image={image} setImage={setImage} display={display} setDisplay={setDisplay} />
      
      <Header logo={logo} cart={cart} avatar={avatar} />
      <br />
      <div className="flex items-center">
        <div className="w-9/12">
        <ProductImages image={image} setImage={setImage} display={display} setDisplay={setDisplay} />
        </div>
        <AboutProduct quantity={quantity} setQuantity={setQuantity} cartbtn={cartbtn} />
      </div>
    </div>
  );
}

export default App;
