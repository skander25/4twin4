import './App.css';
import {Route,Routes} from 'react-router-dom';
import React,{ Suspense,useState }  from 'react';
import {data }from "./products"
import NavigationBar from './Component/NavigationBar';
const Products = React.lazy( () => import('./Component/Products'));
const ProductDetails =  React.lazy( () => import('./Component/ProductDetails'));
const NotFound  = React.lazy( () => import('./Component/NotFound'));




function App() {
 
  const [product, setProduct] = useState(data);
  
  return (
    <>
    
      <Suspense fallback={<p>Chargement...</p>}>
      <NavigationBar/>
        <Routes>
        <Route path="/"  >
            <Route index element={<Products product={product}  />} />
            <Route path=":id" element={<ProductDetails  product={product} />} />
          </Route>
          <Route path="/products"  >
            <Route index element={<Products product={product}  />} />
            <Route path=":id" element={<ProductDetails  product={product} />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </>
    
  );
}

export default App;