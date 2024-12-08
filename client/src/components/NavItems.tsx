import { CiHome } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { GoTools } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
        <div className="flex justify-around py-2 px-6 gap-x-5 bg-slate-500 rounded-lg absolute top-7 text-white">
            <Link to={'/'}>
              <CiHome size={27} />
            </Link>
            <Link to={'/projects'}>
              <CiFolderOn size={27}/>
            </Link>
            <Link to={'/experience'}>
              <IoBagCheckOutline size={27}/>
            </Link>
            <Link to={'/tools'}>
              <GoTools size={27} />
            </Link>
            <Link to={'/contact'}>
              <TfiWrite size={27}  />
            </Link>
      </div>
    </>
  )
}

export default NavItems