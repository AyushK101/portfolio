import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




const ProfileMain = () => {
  return (
    <div className='px-5 py-8 rounded-lg bg-white border'>
    <div className='flex flex-col '>
        <img src="/portfolio.png" alt="photo" height={500} width={250} />
        <div>
            <span className="text-xl font-bold text-gray-700 text-wrap">
                Trying to be a Software Engineer from India 
            </span>
        </div>
        <div className="flex justify-center gap-2 text-orange-700">
            <FaGithub size={30}/>
            <FaLinkedin size={30}/>
            <FaXTwitter size={30}/>
            <FaInstagramSquare size={30}/>
        </div>
    </div>
    </div>
  )
}

export default ProfileMain