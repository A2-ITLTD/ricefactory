import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bg1 from "../Images/bg1.jpg";
import bg2 from "../Images/bg2.jpg";
import bg3 from "../Images/bg3.jpg";
import i1 from "../Images/it1.jpg";
import i2 from "../Images/it2.jpg";
import i3 from "../Images/it3.jpeg";
import i4 from "../Images/it4.jpg";
import i5 from "../Images/it5.jpg";
import i6 from "../Images/it6.jpg";
import orangebg from "../Images/orangebg.jpg";
import { AiOutlineAlibaba } from "react-icons/ai";
const Baneer = () => {
    return (
        <div>
           {/* main banner */}
           <section className="relative w-full h-[700px]">
            <img src={bg1} className='w-full h-full object-cover object-left md:object-center' />
            <div className='absolute right-0 bottom-40 md:right-28 md:bottom-36 text-white flex flex-col gap-10'>
                <div className='bg-white text-orange-400 rounded-lg'>
                    <h1 className='text-xl md:text-4xl font-bold p-5'>We offer premium-quality rice. <br /> Guaranteed to be 100% pure.</h1>
                    <div className="divider"><FaRegCircleDot className='text-6xl' /></div>
                    <button className='w-full text-orange-400 font-bold text-3xl py-8 hover:text-black'>
                       <Link to="/allproducts">Shop Now</Link>
                    </button>
                </div>
            </div>
            </section>
            {/* alibab button */}
            <section className="my-16 relative w-full h-32 rounded-md flex items-center justify-center">
                <img src={orangebg} className='absolute inset-0 w-full h-full object-cover object-left md:object-center rounded-md' />
                <div className='relative z-10'>
                    <Link to="/" className='flex gap-2 items-center bg-white hover:bg-slate-200 text-[#FF6701] text-sm md:text-2xl font-bold py-2 px-3 md:px-8 rounded-md'>
                    Get In Touch With Alibaba <AiOutlineAlibaba className='text-base md:text-5xl' />
                    </Link>
                </div>
            </section>
            {/* About */}
            <section className='mt-28 px-5 md:px-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center'>
                <div>
                    <div className='w-full h-ull rounded-md'>
                        <img src={bg2} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
                <div className='flex flex-col gap-6 justify-start items-center'>
                    <h1 className='text-4xl font-bold text-[#045364] text-wrap pb-5'>To accomplish our goal, we offer:</h1>

                <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Premier Rice Milling and Global Exporters</div>
                    <div className="collapse-content">
                        <p>As a leading rice miller and global exporter, we specialize in long-grain, basmati, and jasmine rice. With a substantial milling capacity, we significantly contribute to the global supply of high-quality rice. Our advanced production facility is located in Buriram, Thailand.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Strategic Global Rice Sourcing and Export Solutions</div>
                    <div className="collapse-content">
                        <p>Sugar Factory Exporters International carefully selects its bulk rice suppliers from top producers in Brazil and India. This extensive global network allows us to secure competitive pricing and minimize delivery time and costs. Before fulfilling an order, we thoroughly assess the buyer’s requirements, stock availability, and transit time. We offer quotes on a CFR or CNF basis for major ports, including Laem Chabang in Bangkok, Porto de Santos in São Paulo, and Nhava Sheva in India.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Get in Touch for a Live Quote and Secure Your Rice Supply</div>
                    <div className="collapse-content">
                        <p>Contact our sales team today for a live quote and place your order for premium rice. We are proud to regularly export to over 50 countries, including those in East Africa and Latin America. Established in 2002, Chamni Rice Factory Co., Ltd. has grown to become Thailand’s largest rice producer and is honored to be ranked among the top companies with the highest export quota permissions.</p>
                    </div>
                </div>
            </div>

                <div className='bg-orange-400 rounded-md p-4 md:p-12 flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold text-white text-wrap pb-5'>Our primary project</h1>
                    <p className='text-base font-normal text-white text-justify text-wrap'>
                    Our dedication to quality shines through in every stage of our production process. We collaborate with ethical and sustainable suppliers to guarantee that every grain of our sugar is 100% pure, free of additives, and carefully refined to preserve its natural sweetness and color. Whether you're a home baker, a professional chef, or someone with a taste for the finest, our sugar is designed to elevate your culinary creations with just the right amount of sweetness.
                    </p>
                </div>
            </div>
            </section>
            {/* best setting products */}
            <section className='mt-28 px-5 md:px-28'>
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
            </section>
            {/* our speciality */}
            <section className='mt-28 px-5 md:px-28'>
                <div
                    className="relative w-full h-auto md:h-[400px] flex items-center justify-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      
                    >
                    <div className="relative text-center flex flex-col gap-5 items-center py-5 px-5 md:px-28 text-white">
                        <h1 className="text-2xl md:text-5xl text-orange-400 font-bold">Our Specialty</h1>
                        <p className='text-wrap text-justify md:text-center'>We offer a diverse selection of premium rice varieties for direct food use, including long-grain, basmati, and jasmine rice, as well as fair-trade options. Enjoy the advantages of no broker commission, direct shipments, and no cross-contamination. For more information and to check availability in your region, please contact your local market representative.</p>
                        <Link to="/about" className="mt-4 px-6 py-2 w-fit bg-orange-400 text-white rounded-lg">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Baneer;