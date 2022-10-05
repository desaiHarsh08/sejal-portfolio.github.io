import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { MyFooter } from "./components/Footer";
// import MyFooter from "./components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      
      {/* <MyFooter /> */}
      <MyFooter />
    </>
  );
}

export default App;
