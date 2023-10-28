import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Cart from "./components/Cart/Cart";
// import Checkout from "./components/Checkout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
// import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div >
      {/* <BrowserRouter> */}
        {/* <CartProvider> */}
          <NavBar />
          <ItemListContainer greeting='Bienvenidos!'/>
          <ItemDetailContainer/>

           {/* <Routes> */}
            {/* <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"} />} /> */}
            {/* <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoria"} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} /> */}
           {/* </Routes> */}
        {/* </CartProvider> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
