import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Gift from './pages/GIFTS'
import Men from './pages/Men'
import Women from './pages/Women'
import Service from './pages/Service'
import Watches from './pages/Watches'
import Sale from './pages/Sale'
import Smart from './pages/SmartWatches'
import Internationalbrand from './pages/internationalbrand'
import Premium from './pages/Premium'
import CardGrid from './components/CardGrid';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'
import Edge from './pages/Edge'
import Clocks from './pages/Clocks'
import Nebula from './pages/Nebula'
import Raga from './pages/Raga'
import { WishlistProvider } from './Context/WishlistContext';
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'
import AddressConfirmation from './pages/AddressConfirmation';
import { AddressProvider } from './Context/AddressContext';
import OrderSuccess from './pages/OrderSuccess'
import Payment from './pages/Payment'
function App() {
  

  return (
    <>
    <AddressProvider>
    <WishlistProvider>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GIFTS" element={<Gift />} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/Watches" element={<Watches/>} />
      <Route path="/Sale" element={<Sale/>} />
      <Route path="/smart" element={<Smart/>} />
      <Route path="/international" element={<Internationalbrand/>} />
      <Route path="/premium" element={<Premium/>} />
      <Route path="/" element={<CardGrid />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/men/:id" element={<Men />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edge" element={<Edge/>} />
      <Route path="/clocks" element={<Clocks/>} />
      <Route path="/nebula" element={<Nebula/>} />
      <Route path="/raga" element={<Raga/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/confirm-address" element={<AddressConfirmation />} />
      <Route path="/order-success" element={<OrderSuccess/>} />
      <Route path="/payment" element={<Payment />} />


    </Routes>
    </WishlistProvider>
    </AddressProvider>
    </>
  )
}

export default App
