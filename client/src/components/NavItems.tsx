import { FaHome } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
        <div className="flex justify-around py-3 px-8 gap-x-8  bg-navbar rounded-lg  absolute top-7 text-white">
            <Link to={'/'}>
              <FaHome size={25}  className="text-orange-500"/>
            </Link>
            <Link to={'/projects'}>
              <FaFolderOpen size={25}className="text-orange-500"/>
            </Link>
            <Link to={'/experience'}>
              <PiBagFill size={25}className="text-orange-500"/>
            </Link>
            <Link to={'/tools'}>
              <FaTools size={25} className="text-orange-500"/>
            </Link>
            <Link to={'/contact'}>
              <RiContactsFill size={25}  className="text-orange-500"/>
            </Link>
      </div>
    </>
  )
}

export default NavItems