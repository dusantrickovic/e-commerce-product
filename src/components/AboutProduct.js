
function AboutProduct({quantity, setQuantity, cartbtn}) {
    return (
        <div className="flex flex-col text-left mr-48">
            <h2 className="text-yellow-500 font-bold text-sm">SNEAKER COMPANY</h2>
            
            <h1 className="font-bold text-4xl w-2/3">Fall Limited Edition Sneakers</h1>
            <br />
            <p className="text-xs text-gray-500 w-4/6 font-semibold">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <br />
            <div className="flex items-center">
                <h1 className="font-bold text-2xl">$125.00</h1>
                <p className="ml-4 bg-yellow-300 text-yellow-600 rounded-md font-bold px-2">50%</p>
            </div>
            <p className="text-gray-400"><s>$250.00</s></p>
            <br />
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <div className=" rounded-l-md flex px-2 cursor-pointer font-bold text-yellow-500 text-2xl items-center bg-gray-200 justify-center border-r-2 border-gray-300" onClick={() => {setQuantity(quantity-1); if(quantity <= 1) setQuantity(1)}}>
                        <p>-</p>
                    </div>
                    <div className="flex px-2 py-0.5 w-24 font-bold items-center bg-gray-200 justify-center border-r-2 border-gray-300">
                        <p> {quantity} </p>
                    </div>
                    <div className="rounded-r-md mr-4 flex px-2 cursor-pointer font-bold text-yellow-500 text-2xl items-center bg-gray-200 justify-center border-r-2" onClick={() => setQuantity(quantity+1)} >
                        <p>+</p>
                    </div>
                </div>

                <button class="flex items-center ml-10 bg-yellow-500 text-white px-10 py-3 rounded-lg">
                    <img src={cartbtn} alt="cart" className="w-4 h-4 mr-4" />
                    <p className="font-bold text-sm">Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default AboutProduct
