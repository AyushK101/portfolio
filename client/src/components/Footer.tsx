import { FaHeart } from "react-icons/fa";
import Container from './Container'

const Footer = () => {
  return (
    <>
      <Container>
        <div className="text-xl font-extrabold py-20 text-center">
          Made By <span className="text-orange-600"><a className="cursor-pointer" href="https://github.com/AyushK101/">Ayush Kumar</a></span> with  <FaHeart className="inline-block" size={20} color="red"/>
        </div>
      </Container>
    </>
  )
}

export default Footer