import { Outlet } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import whatsapp from './Images/whatsapp.png';
import Footer from './components/Footer';

const Root = () => {
    return (
        <div className="w-full">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           <div className="fixed bottom-6 right-6">
                <a href="https://wa.me/+8801871733305?text=Hello how can I help you?" target="_blank">
                    <img src={whatsapp} className="w-16" title="Chat with Us" />
                </a>
           </div>
        </div>
    );
};

export default Root;