import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success("Logout successful");
          })
        .catch(error => {
            toast.error(error.message);
          });
    };

    return (
        <>
        <div className="navbar bg-base-100 px-5 md:px-28 relative z-50">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-semibold text-orange-400">
                <Link to="/"><a>Home</a></Link>
                <li>
                <a><Link to="/allproducts">Products</Link></a>
                <ul className="p-2">
                    <Link  to={`/item/5`}><li><a>Basmati Rice</a></li></Link>
                    <Link  to={`/item/3`}><li><a>Jasmine Rice</a></li></Link>
                    <Link  to={`/item/4`}><li><a>100% Broken Rice</a></li></Link>
                    <Link  to={`/item/1`}><li><a>Brown Rice</a></li></Link>
                    <Link  to={`/item/2`}><li><a>Long Grain Rice</a></li></Link>
                    <Link  to={`/item/6`}><li><a>Short Grain Rice</a></li></Link>
                </ul>
                </li>
                <li><Link to="/contact"><a>Contact Us</a></Link></li>
                <li><Link to="/about"><a>About Us</a></Link></li>
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
                <img src={logo} className="w-full h-full" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-semibold text-orange-400">
            <li><Link to="/"><a>Home</a></Link></li>
            <li>
                <details>
                <summary><Link to="/allproducts">Products</Link></summary>
                <ul className="p-2 w-72">
                    <Link  to={`/item/5`}><li><a>Basmati Rice</a></li></Link>
                    <Link  to={`/item/3`}><li><a>Jasmine Rice</a></li></Link>
                    <Link  to={`/item/4`}><li><a>100% Broken Rice </a></li></Link>
                    <Link  to={`/item/1`}><li><a>Brown Rice</a></li></Link>
                    <Link  to={`/item/2`}><li><a>Long Grain Rice</a></li></Link>
                    <Link  to={`/item/6`}><li><a>Short Grain Rice</a></li></Link>
                </ul>
                </details>
            </li>
            <li><Link to="/contact"><a>Contact Us</a></Link></li>
            <li><Link to="/about"><a>About Us</a></Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Growers</a>
        </div>
    </div>
    <div className="navbar bg-orange-400 text-primary-content">
        <div className="w-full flex justify-center">
            <Link to="/riceform"><button className="btn btn-ghost text-xl text-white flex gap-2 items-center"><IoIosArrowForward />Forms</button></Link>
            <Link to="/nonsuppling"><button className="btn btn-ghost text-xl text-white flex gap-2 items-center"><IoIosArrowForward />Non-supplying Grower Seed Ordering</button></Link>
            {
                user ? 
                
                    <div className="flex gap-3 items-center">
                        
                        <a className="btn text-white text-xl flex gap-2 items-center"><CgProfile /> {user.displayName}</a>
                        <a onClick={handleLogout} className="btn btn-ghost text-xl text-white flex gap-2 items-center"><IoIosArrowForward />Logout</a>
                    </div>

                :   <div className="flex gap-3 items-center">
                        <Link to="/login"><a className="btn btn-ghost text-xl text-white flex gap-2 items-center"><IoIosArrowForward />Login</a></Link>
                        <Link to="/registration"><a className="btn btn-ghost text-xl text-white flex gap-2 items-center"><IoIosArrowForward />Registration</a></Link>
                    </div>

            }
        </div>
    </div>
    </>
    );
};

export default Navbar;