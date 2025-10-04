// components
import Container from "../components/Container"
import Socials from '../components/Socials'

const Navbar = () => {
  return (
    <Container>
        <nav className="pt-5">
            <div className="flex justify-between items-center">
                {/* logo */}
                <div className="flex items-center space-x-2">   
                    <img src="https://cdn-icons-png.flaticon.com/512/187/187879.png" 
                    alt="logo" 
                    className="h-10 w-10 object-cover"/>
                    <span className="text-4xl text-white font-extrabold">Zeplin</span>
                </div>
                
                {/* menu */}
                <div className="space-x-5">
                    <a href="#home" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Home</a>
                    <a href="#about" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>About</a>
                    <a href="#services" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Services</a>
                    <a href="#porfolio" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Portfolio</a>
                    <a href="#resume" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Resume</a>
                    <a href="#pricing" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Pricing</a>
                    <a href="#blog" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Blog</a>
                    <a href="#contact" 
                    className='font-semibold hover:bg-indigo-700/20 p-2 hover:text-indigo-600 hover:rounded-md transition-all duration-600'>Contact</a>
                </div>

                <Socials/>
            </div>
        </nav>
    </Container>
  )
}
export default Navbar