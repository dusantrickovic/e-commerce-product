import productimage1 from '../images/image-product-1.jpg';
import thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import productimage2 from '../images/image-product-2.jpg';
import thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import productimage3 from '../images/image-product-3.jpg';
import thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import productimage4 from '../images/image-product-4.jpg';
import thumbnail4 from '../images/image-product-4-thumbnail.jpg';

function ProductPreview({image, setImage, imagePreview, setImagePreview, setDisplay, close, display}) {
    return (
        <div id="image-preview" className={display}>
        
        <div>
            <img src={close} alt="close" className="w-5 h-5 relative top-8 left-72 cursor-pointer" onClick={() => setDisplay('hidden')} />        
        </div>
            <div className="flex flex-col ml-48 mt-10">
                <div>
                    <img src={image} alt="previewimage" id="preview" className="w-4/6 h-5/6 rounded-xl" />
                </div>

                <div className="flex w-96 relative -mt-24">
                    <img src={thumbnail1} alt="thumbnail1" id="thumbnail1" className="w-24 h-24 rounded-xl mr-24 mt-0 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage1)} />
                    <img src={thumbnail2} alt="thumbnail2" id="thumbnail2" className="w-24 h-24 rounded-xl mr-24 mt-0 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage2)} />
                    <img src={thumbnail3} alt="thumbnail3" id="thumbnail3" className="w-24 h-24 rounded-xl mr-24 mt-0 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage3)} />
                    <img src={thumbnail4} alt="thumbnail4" id="thumbnail4" className="w-24 h-24 rounded-xl mr-0 mt-0 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage4)} />
                </div>    
            </div>
        </div>
    )
}

export default ProductPreview;
