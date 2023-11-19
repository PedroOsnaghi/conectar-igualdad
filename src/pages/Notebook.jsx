import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import '../styles/Notebook.css'
import { bannerNoteBook, netbook } from '../assets';
import AccordionDemo from '../components/Accordion';
const Notebook = () => {
  return <>
    <Navbar/>
     <div className='container-banner'>
      <img src={bannerNoteBook} alt="" />
    </div> 
    <div className='container-netbook flex justify-center'>
    <img src={netbook} alt="" />
    </div>
    <AccordionDemo/>
    <Carousel/>
    <Footer/>
  </>
};

export default Notebook;
