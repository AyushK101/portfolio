import Container from './Container'
import ProfileMain from './ProfileMain'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react';

const HeroSection = () => {
 const location =   useLocation()
  return (
    <>
        <Container>
            <div className='pt-24 md:flex gap-20 '>
                <ProfileMain/>
                <AnimatePresence>
                <motion.div className='flex-grow'
                  key={location.pathname}
                >
                <Outlet/>
                </motion.div>

                </AnimatePresence>
                
            </div>
        </Container>
    </>
  )
}

export default HeroSection