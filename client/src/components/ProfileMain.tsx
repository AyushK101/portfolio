import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import {motion} from 'motion/react'




const ProfileMain = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: .5
        }
      }}
      className="relative p-5"
    >


    <div className='sticky top-6 px-5 py-8 rounded-lg bg-slate-100 border min-w-full md:min-w-80 min-h-56 max-h-fit max-w-56 shadow-md shadow-stone-300'>
    <div className='flex flex-col text-center items-center gap-5 p-2'>
        <img src="/self.jpeg" alt="photo" className="shadow-black shadow-md rounded-lg border"/>
        <span className="text-black text-4xl font-extrabold  font-mono">
            AYUSH KUMAR
          </span>
          {/* <div>
          
            <span className="text-xl font-bold text-gray-700 text-wrap">
                Trying to be a Software Engineer from India 
            </span>
        </div> */}
        <div className="flex justify-center gap-2 text-orange-700">
            <a href="https://github.com/ayushK101/"><FaGithub size={38}/></a>
            <a href="https://www.linkedin.com/in/ayushk101/"><FaLinkedin size={38}/></a>
            <a href="https://x.com/Ayushk_101"><FaXTwitter size={38}/></a>
            <a href="https://www.instagram.com/ayush1004nv/"><FaInstagramSquare size={38}/></a>
        </div>
    </div>
    </div>
    </motion.div>

  )
}

export default ProfileMain