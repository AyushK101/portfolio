import Container from './Container'
import ProfileMain from './ProfileMain'
import { Outlet } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
        <Container>
            <div className='pt-24 bg-red-50 flex'>
                <ProfileMain/>
                <Outlet />
            </div>
        </Container>
    </>
  )
}

export default HeroSection