
function Header({logo, cart, avatar, displayCart, setDisplayCart, clickCount, setClickCount}) {
    return (
        <div className="hidden md:bg-white md:border-b-2 md:border-gray-200 md:h-24 md:w-9/12 md:self-center md:m-auto md:flex md:items-center">
            <div>
                <img src={logo} alt="logo" className="cursor-pointer"/>
            </div>
            
            <ul className="flex">
                <li className="cursor-pointer mr-6 ml-16 text-gray-500">Collections</li>
                <li className="cursor-pointer mr-6 text-gray-500">Men</li>
                <li className="cursor-pointer mr-6 text-gray-500">Women</li>
                <li className="cursor-pointer mr-6 text-gray-500">About</li>
                <li className="cursor-pointer mr-6 text-gray-500">Contact</li>
            </ul>

            <div className="flex items-center w-96 justify-end ml-48">
                <img 
                    src={cart} 
                    alt="cart" 
                    className="w-5 h-5 cursor-pointer" 
                    onClick={() => {
                        setClickCount(clickCount+1); 
                        if(clickCount % 2 != 0) 
                            setDisplayCart("border-2 w-1/5 h-48 absolute bg-white flex justify-center mt-4 right-60 shadow-lg z-10"); 
                        else 
                            setDisplayCart("hidden") }} />
                <img src={avatar} alt="avatar" className="w-10 h-10 ml-12 cursor-pointer" />
            </div>
        </div>
    )
}

export default Header
