import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import bg6 from '../Images/bg6.jpg';

const Login = () => {
    const { loginUser, loginGoogle, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Login successful");
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error("Invalid email or password");
          });
    };

    const handleSigninGoogle = () => {
        loginGoogle(provider)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Signed in with Google");
            
        })
        .catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    };

    
    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div className="">
           <div className="relative w-full h-full shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg6})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            
            <div className="flex flex-col md:flex-row  justify-between gap-5 md:gap-20 items-center w-4/5 mx-auto py-5 md:py-10">
                <div className="p-5 ">
                    <div>
                        <h1 className="text-lg md:text-6xl font-bold text-white text-ceter pb-2 md:pb-10">Login Now!</h1>
                        <h1 className="text-lg md:text-2xl font-bold text-white text-ceter pb-2 md:pb-10">
                            Or  
                            <Link to="/Registration" className="text-primary"> Sign Up Here </Link>
                            if you don't have an ID.</h1>
                    </div>
                </div>
                {/* <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 rounded text-base text-black' /> */}
                {/* form */}
                <div className="w-full md:w-1/2 bg-white p-1 md:p-10 rounded-md">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-orange-400 text-white">Login</button>
                        </div>
                        <br />
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <p className="text-orange-400">or signin with</p>
                            <div className="flex gap-3 text-4xl">
                                <button onClick={handleSigninGoogle}><FcGoogle /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
    
};

export default Login;
