import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import cartbtn from './images/cart-btn.svg';
import avatar from './images/image-avatar.png';
import close from './images/icon-close.svg';
import menu from './images/icon-menu.svg';
import prev from './images/icon-previous.svg';
import next from './images/icon-next.svg';
import './App.css';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import { useState } from 'react';
import ProductPreview from './components/ProductPreview';
import AboutProduct from './components/AboutProduct';
import Cart from './components/Cart';
import productimage1 from './images/image-product-1.jpg';
import productimage2 from './images/image-product-2.jpg';
import productimage3 from './images/image-product-3.jpg';
import productimage4 from './images/image-product-4.jpg';
import { useEffect } from 'react';

function App() {
  const pictures = [productimage1, productimage2, productimage3, productimage4];
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(pictures[0]);
  
  const [display, setDisplay] = useState('hidden');
  const [displayCart, setDisplayCart] = useState('hidden');
  const [quantity, setQuantity] = useState(1);
  const [clickCount, setClickCount] = useState(1);

  useEffect(() => {
    setImage(pictures[count]);
  }, [count])

  return (
    <div className="App">
     
      <ProductPreview close={close} image={image} setImage={setImage} display={display} setDisplay={setDisplay} />
      
      <Header logo={logo} cart={cart} avatar={avatar} displayCart={displayCart} setDisplayCart={setDisplayCart} clickCount={clickCount} setClickCount={setClickCount} />
      
      {/* Mobile header */}
      <div className="flex w-2/3 items-center p-5 border-2 bg-white md:hidden">
        <div className="flex items-center">
          <img src={menu} alt="menu" className="mr-4" />
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center ml-24">
          <img src={cart} alt="cart" />
          <img src={avatar} alt="logo" className="w-8 h-8 ml-6"/>
        </div>
      </div>

      <div className={`${displayCart}`}>
        <Cart displayCart={displayCart} setDisplayCart={setDisplayCart}/>
      </div>
      
      <br />

      {/* Mobile image slides (below) - there's a bug in the 'view next' and 'view previous' functionality 
      where it either takes the user one picture backwards or forwards 
      and requires a double click --> TO BE FIXED
      
      UPDATE: FIXED.
       */}

      <div className="flex w-full h-1/2 md:hidden ">
        <img 
          src={prev}
          alt="previous"
          id="prev"
          className="absolute z-30 h-5 w-5 p-1 bg-white rounded-full ml-3 my-auto top-56" 
          onClick={() => {setCount(count-1); if(count <= 0) setCount(0)}} />
        
        <img src={image} alt="previewimage" id="preview" className="w-full h-80 z-20" />
        
        <img 
          src={next} 
          alt="next" 
          id="next"
          className="absolute z-30 h-5 w-5 left-80 -ml-0 bg-white rounded-full p-1 top-56" 
          onClick={() => {setCount(count+1); if(count >= 3) setCount(3)}} />
      
      </div>

      <div className="hidden md:flex md:items-center">
        <div className="w-9/12">

        {/* Desktop view - Images */}
          <div className="">
            <ProductImages image={image} setImage={setImage} display={display} setDisplay={setDisplay} />
          </div>

        </div>

        

        <AboutProduct quantity={quantity} setQuantity={setQuantity} cartbtn={cartbtn} clickCount={clickCount} setClickCount={setClickCount} />
      </div>
    </div>
  );
}

export default App;
