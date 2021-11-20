function Cart({displayCart, setDisplayCart}) {
    return (
        <div className="text-left mx-4 flex flex-col w-full ">
            <h1 className="text-lg font-bold text-left border-b-2 py-2">Cart</h1>
            <div className="flex justify-center items-center w-full text-center m-auto">
                <p className="items-center w-full">Your cart is empty.</p>
            </div>
        </div>
    )
}

export default Cart
