import HomePage from './components/homePage';
import Navbar from './components/navbar'
import Products from './components/products';
import Card from './components/card'
import Form from './components/form'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <div className="App">
         <Navbar />
        <HomePage/>
     
 
			
				


				
      <Products/>
      <Footer/>

    </div >
  );
}

export default App;
  //  <Navbar />

  //     <HomePage />


   

  //     <Products />

  //     <Footer />