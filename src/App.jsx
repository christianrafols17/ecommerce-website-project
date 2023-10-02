import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import ShopContextProvider from './context/ShopContext'

function App() {
  return (
      <div className='Shoping App'>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
                <Route path='/ecommerce-website-project/' element={<Shop />}/>
                <Route path='/ecommerce-website-project/cart' element={<Cart />}/>
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
  )
}

export default App
