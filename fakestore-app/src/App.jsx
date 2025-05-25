import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Home from './components/Home'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import ProductDetails from './components/ProductDetails.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div id='superContainer'>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App