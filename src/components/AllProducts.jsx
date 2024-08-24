import { useEffect } from "react";
import i1 from "../Images/it1.jpg";
import i2 from "../Images/it2.jpg";
import i3 from "../Images/it3.jpeg";
import i4 from "../Images/it4.jpg";
import i5 from "../Images/it5.jpg";
import i6 from "../Images/it6.jpg";
import { Link } from "react-router-dom";

const AllProducts = () => {
    useEffect(() => {
        document.title = "All Products";
    }, []);
    return (
        <div className='mt-12 px-5 md:px-28'>
          <div className='w-full text-center my-12'>
                    <p className='font-bold text-[#045364] text-3xl'>Popular Products</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>
                    {/* 1 */}
                    <Link to={`/item/1`} className="card card-compact bg-base-100 w-auto md:w-96 shadow-xl">
                        <figure className='w-full h-60'>
                            <img
                            src={i1}
                            alt="Shoes"
                            className='w-full h-full object-cover object-center rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <p className='font-bold text-orange-400 text-xl'>Basmati Rice</p>
                        </div>
                    </Link>
                    {/* 2 */}
                    <Link to={`/item/2`} className="card card-compact bg-base-100 w-auto md:w-96 shadow-xl">
                        <figure className='w-full h-60'>
                            <img
                            src={i2}
                            alt="Shoes"
                            className='w-full h-full object-cover object-center rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <p className='font-bold text-orange-400 text-xl'>Jasmine Rice</p>
                        </div>
                    </Link>
                    {/* 3 */}
                    <Link to={`/item/3`} className="card card-compact bg-base-100 w-auto md:w-96 shadow-xl">
                        <figure className='w-full h-60'>
                            <img
                            src={i3}
                            alt="Shoes"
                            className='w-full h-full object-cover object-center rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <p className='font-bold text-orange-400 text-xl'>100% Broken Rice</p>
                        </div>
                    </Link>
                    {/* 4 */}
                    <Link to={`/item/4`} className="card card-compact bg-base-100 w-auto md:w-96 shadow-xl">
                        <figure className='w-full h-60'>
                            <img
                            src={i4}
                            alt="Shoes"
                            className='w-full h-full object-cover object-center rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <p className='font-bold text-orange-400 text-xl'>Brown Rice</p>
                        </div>
                    </Link>
                    {/* 5 */}
                    <Link to={`/item/5`} className="card card-compact bg-base-100 w-auto md:w-96 shadow-xl">
                        <figure className='w-full h-60'>
                            <img
                            src={i5}
                            alt="Shoes"
                            className='w-full h-full object-cover object-center rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <p className='font-bold text-orange-400 text-xl'>Long Grain Rice</p>
                        </div>
                    </Link>
                    {/* 6 */}
                    <Link to={`/item/6`} className="card card-compact bg-base-100 w-auto md:w-96 shadow-xl">
                        <figure className='w-full h-60'>
                            <img
                            src={i6}
                            alt="Shoes"
                            className='w-full h-full object-cover object-center rounded-xl' />
                        </figure>
                        <div className="card-body">
                            <p className='font-bold text-orange-400 text-xl'>Short Grain Rices</p>
                        </div>
                    </Link>
                </div>
        </div>
    );
};

export default AllProducts;