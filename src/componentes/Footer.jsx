import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <>
    <nav className="absolute w-full z-10">
        <ul className="flex justify-between py-4 px-8 text-stone-300 bg-gray-700/90">
            <li className="flex items-center justify-center space-x-2">
                <img className="w-8" src="https://static.vecteezy.com/system/resources/previews/020/975/589/non_2x/yamaha-logo-yamaha-icon-transparent-free-png.png" alt="" />
                <h1 className="text-2xl mb-1">My Tinerary</h1>
            </li>
            <li className="flex items-center space-x-4">
                <NavLink to="/cities" className="text-md">Cities</NavLink>  
                <div className="border-l-1">
                <NavLink to="/login" className="flex items-center space-x-2 px-2 py-1 rounded-md">
                   {<>
                        <img className="w-7" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png" alt="" />
                        <h1 className="text-md">Login</h1>
                   </>}
                </NavLink>  
                </div>
            </li>
            
        </ul>
    </nav>
    </>
  )
}
