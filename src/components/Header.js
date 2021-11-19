
function Header({logo, cart, avatar}) {
    return (
        <div className="bg-white border-b-2 border-gray-200 h-24 w-9/12 self-center m-auto flex items-center">
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
                <img src={cart} alt="cart" className="w-5 h-5 cursor-pointer" />
                <img src={avatar} alt="avatar" className="w-10 h-10 ml-12 cursor-pointer" />
            </div>
        </div>
    )
}

export default Header
