import { useEffect } from "react";
import bg6 from '../Images/bg6.jpg';
const Policy = () => {
    useEffect(() => {
        document.title = "Privacy & Policy";
    }, []);
    return (
        <div className="mt-10 px-5 md:px-28">
           <div className='flex flex-col md:flex-row justify-center items-top gap-14 p-10'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col gap-10 text-left'>
                        <h1 className='text-5xl font-bold text-[#045364] text-wrap'>Privacy & Policy</h1>
                        <p className='text-lg font-normal text-gray-700 text-wrap'>At Rice Factory, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or engage with our services. By accessing or using our website, you agree to the terms of this policy.</p>
                    </div>
                    <div className='flex flex-col gap-5 text-left pl-10 pt-10'>
                        <h1 className='text-xl font-bold text-[#045364] text-wrap flex gap-4 items-center'>
                        Information We Collect
                        </h1>
                        <p className='text-sm font-normal text-gray-700 text-justify text-wrap pl-8'>
                        <b>Personal Information: </b>We may collect personal details such as your name, email address, phone number, and payment information when you place an order, subscribe to our newsletter, or contact our support team. <br /><br />

                        <b>Non-Personal Information:</b> This includes data like your IP address, browser type, and browsing behavior on our website. This information helps us improve our site and services.
                        </p>
                        <h1 className='text-xl font-bold text-[#045364] text-wrap flex gap-4 items-center'>
                        How We Use Your Information
                        </h1>
                        <p className='text-sm font-normal text-gray-700 text-justify text-wrap pl-8'>
                        <b>Order Processing: </b> Your personal information is used to process and fulfill your orders, including sending order confirmations and shipping updates. <br /><br />

                        <b>Communication:</b> We may use your contact details to send you promotional offers, updates, or important information about our services. You can opt out of these communications at any time.
                        </p>
                        <h1 className='text-xl font-bold text-[#045364] text-wrap flex gap-4 items-center'>
                        Data Security
                        </h1>
                        <p className='text-sm font-normal text-gray-700 text-justify text-wrap pl-8'>
                        We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Despite our efforts, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.
                        </p>
                        <h1 className='text-xl font-bold text-[#045364] text-wrap flex gap-4 items-center'>
                        Third-Party Sharing
                        </h1>
                        <p className='text-sm font-normal text-gray-700 text-justify text-wrap pl-8'>
                        We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners who assist in providing our services, such as payment processors and shipping companies. These partners are required to protect your information and use it only for the purposes specified by us.
                        </p>
                        <h1 className='text-xl font-bold text-[#045364] text-wrap flex gap-4 items-center'>
                        Changes to This Policy
                        </h1>
                        <p className='text-sm font-normal text-gray-700 text-justify text-wrap pl-8'>
                        We may update this Privacy Policy periodically to reflect changes in our practices or for legal, regulatory, or operational reasons. We encourage you to review this policy regularly to stay informed about how we are protecting your information.
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full h-full rounded-md'>
                        <img src={bg6} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policy;