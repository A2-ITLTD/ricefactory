import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';
import pinterest from '../Images/pinterest.png';
import twitter from '../Images/twitter.png';
import whatsapp from '../Images/whatsapp.png';
import youtube from '../Images/youtube.png';
import alibaba from '../Images/alibaba_logo.png';
import logo from "../Images/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="w-full mt-16">
           <footer className="footer bg-base-200 text-base-content py-10 px-5 md:px-28">
            <nav>
                <h6 className="footer-title text-[#045364] text-xl">Registration Number</h6>
                <a className="link link-hover">MCS Global General Trading</a>
                <a className="link link-hover">Company Number: DSCC/018914</a>
                <a className="link link-hover">TRIPLE A SUPPLY CO LTD</a>
                <a className="link link-hover">UK Company Number: 14802825</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#045364] text-xl">Contact Info</h6>
                <a className="link link-hover">Bangladesh, Thailand & UK</a>
                <a className="link link-hover">info@sugarbulksale.com</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#045364] text-xl">Company</h6>
                <Link to="/policy"><a className="link link-hover">Privacy & Policy</a></Link>
                <Link to="/about"><a className="link link-hover">About us</a></Link>
                <Link to="/contact"><a className="link link-hover">Contact</a></Link>
            </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-5 md:px-28 py-4">
            <aside className="grid-flow-col items-center">
                <p className='flex flex-wrap gap-8 items-center'>
                <img src={logo} className='w-40 h-full' />
                <br />
                © Copyright 2024 | Rice Factory | All Rights Reserved
                </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <img src={alibaba} className='w-10' />
                    <img src={facebook} className='w-10' />
                    <img src={instagram} className='w-10' />
                    <img src={twitter} className='w-10' />
                    <img src={whatsapp} className='w-10' />
                    <img src={pinterest} className='w-10' />
                    <img src={linkedin} className='w-10' />
                    <img src={youtube} className='w-10' />
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;