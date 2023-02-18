// import Cart from "./pages/Cart";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GloablStyle } from "./GlobalStyle";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";


const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const ProductList = lazy(() => import('./pages/ProductList'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/SignIn'));
const Cart = lazy(() => import('./pages/Cart'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));


function App() {
 
  return (
    <Router>
      <GloablStyle />
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct/:id" element={<Product />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
