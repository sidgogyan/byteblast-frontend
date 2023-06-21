import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import img1 from "./assest/images/img1.png";
import img2 from "./assest/images/img2.png";
import img3 from "./assest/images/img3.png";
import Bio from "./components/Bio/Bio";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <About/>
  <Layout heading="Hello world" img={img1} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>

  <Layout heading="Hello world" img={img2} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>

  <Layout heading="Hello world" img={img3} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
  <Bio/>
 <Footer/>

  </>
  
  );
}

export default App;
