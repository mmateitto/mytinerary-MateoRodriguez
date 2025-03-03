import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen relative'>
        <img className='absolute h-screen w-full object-cover -z-10 opacity-90' src="../public/image (2).webp" alt="" />
        <div className="flex flex-col items-center justify-center text-white font-sans text-center w-60 bg-black/40 p-5">
           <h1>"Find your perfect trip, designed by insiders who know and love their cities!"</h1> 
           <NavLink to="/cities" className='bg-blue-400/40 p-2 mt-2 rounded-lg'>Click Here!</NavLink>
        </div>
        
    </div>
        
    </>
  )
}
