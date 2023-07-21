import Layout from './Layout';
import { Routes , Route } from 'react-router-dom'
import  Login from './components/Login' ; 
import Aboutus from './components/Aboutus';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import SharedLayout from './components/SharedLayout';
import  Livechat from './components/Livechat' ;
import  Livedemo from './components/Livedemo' ;
import Proddemo from './components/Proddemo';
import Shop from "./booths/Shop";
import Shop2 from "./booths/Shop2";
import Shop3 from "./booths/Shop3";
import Shop4 from "./booths/Shop4";
import Shop5 from "./booths/Shop5";
import Shop6 from "./booths/Shop6";
import Products from './components/Products';

function App() {
  

  return (
<Routes> 
  <Route path='/' element={<SharedLayout/>}>   {/* This component is shared through out the app i.e navbar  */}
    <Route index element={<Layout/>} />   {/* this will be the default layout when user visits our link */ }
    <Route path='/login' element={<Login/>} />
    <Route path='/Livechat' element={<Livechat/>} />
    <Route path='/Proddemo' element={<Proddemo/>} />
    <Route path='/Xiaomi' element={<Shop />} />
    <Route path='/Huawei' element={<Shop2 />} />
    <Route path='/Nvidia' element={<Shop3 />} />
    <Route path='/Acer' element={<Shop4 />} />
    <Route path='/Oppo' element={<Shop5 />} />
    <Route path='/Asus' element={<Shop6 />} />
    <Route path='/Aboutus' element={<Aboutus />} />
    <Route path='/Contacts' element={<Contacts />} />
    <Route path='/Xiaomi/Livedemo' element={<Livedemo/>}/>
    <Route path='/Huawei/Livedemo' element={<Livedemo/>}/>
    <Route path='/Oppo/Livedemo' element={<Livedemo/>}/>
    <Route path='/Acer/Livedemo' element={<Livedemo/>}/>
    <Route path='/Asus/Livedemo' element={<Livedemo/>}/>
    <Route path='/Nvidia/Livedemo' element={<Livedemo/>}/>
    <Route path='/Xiaomi/items' element={<Products/>}/>
    <Route path='/Huawei/items' element={<Products/>}/>
    <Route path='/Oppo/items' element={<Products/>}/>
    <Route path='/Acer/items' element={<Products/>}/>
    <Route path='/Asus/items' element={<Products/>}/>
    <Route path='/Nvidia/items' element={<Products/>}/>
    <Route path='*' element={<NotFound />} />
  </Route>
</Routes>
  
  )
}

export default App ; 



