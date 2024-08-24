import { useEffect } from "react";
import bg4 from '../Images/bg4.jpg';
import { RiMedalLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
const About = () => {
    useEffect(() => {
        document.title = "About Us";
    }, []);
    return (
        <div className="mt-16 px-5 md:px-28">
            <div className='flex flex-col md:flex-row justify-center items-top gap-14 p-0 md:p-10'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col gap-10 text-left'>
                        <h1 className='text-2xl md:text-5xl font-bold text-[#045364] text-wrap'>MCS GLOBAL GENERAL TRADING</h1>
                        <p className='text-lg font-normal text-gray-700 text-wrap'>With a production capacity of 11,000MT cane per day located in Buriram, Thailand, working in partnership with Top Indian and Brazilian sugar mills.As p.</p>
                    </div>
                    <div className='flex flex-col gap-5 text-left pl-0 md:pl-10 pt-5 md:pt-10'>
                        <h1 className='text-2xl md:text-4xl font-bold text-[#045364] text-wrap flex gap-4 items-center'>
                            How it works
                        </h1>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap pl-0 md:pl-12'>
                        Founded in 2008, MCS Global General Trading is proud to be one of the largest rice producers, holding the highest permitted exporter quota. As a trusted local supplier, we provide Long-Grain, Basmati, Jasmine, and other rice varieties in bulk to over 50 port cities worldwide.

                        MCS Global General Trading has achieved significant progress, becoming one of the region’s leading standalone rice mills. Our mission is to deliver top-quality rice at the most competitive market prices, with our sales team offering exceptional logistical support.

                        As part of the nation's youth, we are driven, attentive, and innovative, committed to consistently delivering excellence. We operate with the utmost good faith, ensuring that our clients receive the best solutions for their business needs.
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full h-full rounded-md'>
                        <img src={bg4} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-16 items-center mt-10">
                {/* card 1 */}
                <div className="card bg-primary text-primary-content w-auto md:w-96 h-full">
                    <div className="card-body">
                        <RiMedalLine className="text-4xl"/>
                        <h2 className="card-title">Product Quality</h2>
                        <p>Our access to the world best-in-class rice producers to provide a full range of rice qualities with privileged access to very high quality rice.</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-primary text-primary-content w-auto md:w-96 h-full">
                    <div className="card-body">
                        <FaRegHandshake className="text-4xl" />
                        <h2 className="card-title">Reliability</h2>
                        <p>Our talented team and their commitment to deliver on what we promise aligned with our customer with high expectations.</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-primary text-primary-content w-auto md:w-96 h-full">
                    <div className="card-body">
                        <CiStar className="text-4xl" />
                        <h2 className="card-title">Advisory</h2>
                        <p>Extensive trading and risk management expertise, experience across commodities, proximity to producers, and strong analytics to support our business partners.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;