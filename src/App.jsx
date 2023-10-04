import { BrowserRouter} from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import ShopContextProvider from './context/ShopContext'

const App = () => {
  return (
      <div className='Shoping App'>
        <ShopContextProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </ShopContextProvider>
      </div>
  )
}

export default App
