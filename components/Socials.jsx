// icons-socials
import { 
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaFacebookF,
} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="flex items-center space-x-2 ">
      <a href="https://www.instagram.com/zeppelin__p/?theme=dark" className="text-white text-md bg-zinc-900 p-3 rounded-full hover:bg-indigo-600 transition duration-500">
        <FaInstagram />
      </a>
      <a href="www.linkedin.com/in/paraphol-pp" className="text-white text-md bg-zinc-900 p-3 rounded-full hover:bg-indigo-600 transition duration-500">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/paraphol-pp" className="text-white text-md bg-zinc-900 p-3 rounded-full hover:bg-indigo-600 transition duration-500">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/paraphol.puangpee.2024" className="text-white text-md bg-zinc-900 p-3 rounded-full hover:bg-indigo-600 transition duration-500">
        <FaFacebookF />
      </a>
      
    </div>
  );
};
export default Socials;
