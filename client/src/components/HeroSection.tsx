import Container from './Container'
import ProfileMain from './ProfileMain'
import { Outlet } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
        <Container>
            <div className='pt-24 md:flex gap-20 '>
                <ProfileMain/>
                <div className='flex-grow'>
                <Outlet />
                </div>
            </div>
        </Container>
    </>
  )
}

export default HeroSection