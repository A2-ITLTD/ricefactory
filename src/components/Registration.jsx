import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg6 from '../Images/bg6.jpg';

const Registration = () => {

    const { createUser, updateUserProfile, loading, setUser } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const [showpassword, setShowPassword] = useState(false);
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)){
            toast.error("Password should contain Uppercase characters");
            return;
        }
        else if (!/[a-z]/.test(password)){
            toast.error("Password should contain Lowercase characters");
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUserProfile(name)
            .then( () => {
                const updatedUser = {
                    ...user,
                    displayName: name,
                    
                };
                setUser(updatedUser);
                toast.success("Registration successful");
                console.log(user);
            })
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
    };
    useEffect(() => {
        document.title = "Registration";
    }, []);

    return (
        <div>
           <div className="relative w-full h-full shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg6})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-20 items-center w-4/5 mx-auto py-2 md:py-10">
                <div className="p-5 ">
                    <div>
                        <h1 className="text-lg md:text-6xl font-bold text-white text-ceter pb-2 md:pb-10">Register Here!</h1>
                        <h1 className="text-lg md:text-2xl font-bold text-white text-ceter pb-2 md:pb-10">
                            Already Have and Account ? 
                            <Link to="/Login" className="text-primary"> Login </Link>
                            Here</h1>
                    </div>
                </div>
                {/* <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 rounded text-base text-black' /> */}
                {/* form */}
                <div className="w-full md:w-1/2 bg-white p-2 md:p-10 rounded-md">
                <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        
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
                        <div className="relative flex">
                        <input 
                            type={showpassword ? "text" : "password"} 
                            name="password" 
                            placeholder="password" 
                            className="input input-bordered md:grow" required />
                        <span onClick={ () => setShowPassword(!showpassword)} className="absolute right-0 md:right-4 text-2xl top-3">
                            {
                                showpassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-orange-400 text-white text-base md:text-lg lg:text-lg">Complete Registration</button>
                        </div>
                        <br />
                        <div className="flex justify-center text-center gap-2 px-9">
                            <p className="text-orange-400">Already have and account ?
                            <Link to="/Login"className="text-primary font-bold"> Login </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Registration;