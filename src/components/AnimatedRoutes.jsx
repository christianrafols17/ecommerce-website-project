import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Shop from '../pages/shop/Shop'
import Cart from '../pages/cart/Cart'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route path='/ecommerce-website-project/' element={<Shop />}/>
            <Route path='/ecommerce-website-project/cart' element={<Cart />}/>
            </Routes>
        </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes