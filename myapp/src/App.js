
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import {Provider} from "react-redux"

import store from './Stores/store'

//App.js

function App() {
  return (
    <div className="App">

      <Provider store ={store}>

        <BrowserRouter>

          <Navbar />
          <Routes>

            <Route path="/" >
              <Route index element={<Home />} />
              <Route path="Cart" >
                <Route index element={<Cart />} />
              </Route>
            </Route>
          </Routes>

        </BrowserRouter>

      </Provider>


    </div>
  );
}

export default App;
