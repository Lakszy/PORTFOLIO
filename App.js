import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import Navbar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Contact from "./components/contact";
function App() {
  return (
    <div>

   <Navbar/>
    <Home/>

     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
    <SocialLink/>
    </div>
  );
}

export default App;
