import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




const ProfileMain = () => {
  return (
    <div className='px-5 py-8 rounded-lg bg-white border min-w-full md:min-w-80 min-h-56 max-h-fit max-w-56'>
    <div className='flex flex-col text-center items-center gap-5 p-2'>
        <img src="/portfolio.png" alt="photo" height={500} width={250} />
        <span className="text-black text-4xl font-extrabold">
            AYUSH <br /> KUMAR
          </span>
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