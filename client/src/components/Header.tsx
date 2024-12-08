import Container from './Container'
import NavItems from './NavItems'



const Header = () => {
  return (
    <>
        <Container>
            <nav className='relative flex justify-center'>
                <NavItems/>
            </nav>
        </Container>
    </>
  )
}

export default Header