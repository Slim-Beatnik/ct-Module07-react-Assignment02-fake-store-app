import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Home from './components/Home'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import ProductDetails from './components/ProductDetails.jsx'

function App() {

  const [isActive, setIsActive] = useState(false);

  return (
    <div id='superContainer'>
      <NavigationBar isActive={ isActive } setIsActive={ setIsActive } />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/addproduct" element={<AddProduct/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App