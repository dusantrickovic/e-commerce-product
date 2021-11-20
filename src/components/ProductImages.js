
import productimage1 from '../images/image-product-1.jpg';
import thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import productimage2 from '../images/image-product-2.jpg';
import thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import productimage3 from '../images/image-product-3.jpg';
import thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import productimage4 from '../images/image-product-4.jpg';
import thumbnail4 from '../images/image-product-4-thumbnail.jpg';

function ProductImages({image, setImage, setDisplay}) {    
    /* useEffect(() => {
        const setImage = () => {

        }
    },[image]) */

    return (
        <div className="flex flex-col ml-48 mt-16">
            <div>
                <img src={image} alt="previewimage" id="preview" className="w-96 h-96 rounded-xl cursor-pointer hover:opacity-60" onClick={() => setDisplay('flex flex-col items-center w-full h-screen bg-bgblack absolute mb-4 z-20')} />
            </div>

            <div className="flex w-96">
                <img src={thumbnail1} alt="thumbnail1" id="thumbnail1" className="w-20 h-20 rounded-xl mr-5 mt-4 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage1)} />
                <img src={thumbnail2} alt="thumbnail2" id="thumbnail2" className="w-20 h-20 rounded-xl mr-5 mt-4 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage2)} />
                <img src={thumbnail3} alt="thumbnail3" id="thumbnail3" className="w-20 h-20 rounded-xl mr-6 mt-4 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage3)} />
                <img src={thumbnail4} alt="thumbnail4" id="thumbnail4" className="w-20 h-20 rounded-xl mr-0 mt-4 cursor-pointer hover:opacity-50" onClick={() => setImage(productimage4)} />
            </div>
            
        </div>
    )
}

export default ProductImages
