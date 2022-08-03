
import './App.css';

import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className ="App">
   <BrowserRouter>

   <Navbar/>
<Routes>

 <Route path ="/" >
  <Route index element ={<Home />} />
 <Route path ="cart" >
  <Route index element ={<Cart />} />
 </Route>
 </Route>


</Routes>
   
   
   </BrowserRouter>
    </div>
  );
}

export default App;
