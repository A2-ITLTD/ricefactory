import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneRightCircle } from "react-icons/ai";

const Products = () => {
    
    const [loading, setLoading] = useState(true);
    const [newItem, setNewItem] = useState(null); 

    const item = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    useEffect(() => {
        document.title = "Products Page";
        setLoading(true); 
        setTimeout(() => {
            if (item) {
                const foundItem = item.find(item => item.id === intId);
                if (foundItem) {
                    setNewItem(foundItem);
                } else {
                    console.log(`Product with id ${intId} not found`);
                }
            }
            setLoading(false); 
        }, 1000); 
    }, [item, intId]);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div className="mt-5 md:mt-16 px-5 md:px-28">
            <div className='flex flex-col md:flex-row justify-center items-top gap-5 md:gap-14 p-2 md:p-10'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col gap-10 text-left'>
                        <h1 className='text-4xl font-bold text-[#045364] text-wrap'>{newItem.name}</h1>
                    </div>
                    <div className='flex flex-col gap-5 text-left pt-10'>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap'>
                            {newItem.description}
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full h-full rounded-md'>
                        <img src={newItem.image} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-10">
                <h1 className='text-4xl font-bold text-[#045364] text-wrap'>Packaging & Shipping</h1>
                <p className='text-lg font-normal text-gray-700 text-wrap'>Available in following packages</p>
                <ul className="list-inside flex flex-col gap-2">
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 10 KG</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 25 KG</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 50 KG</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 1000 KG Jumbo bag*</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 1075 KG Jumbo bag*</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 1200 KG Jumbo bag*</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 
                    1250 KG Jumbo bag*</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 1500 KG Jumbo bag*</li>
                    <li className="flex items-center gap-3"><AiTwotoneRightCircle /> 2000 KG Jumbo bag*</li>
                </ul>
                <Link to="/contact" className="btn bg-orange-400 text-white px-4 py-3 w-fit">Contact Us</Link>
            </div>
        </div>
    );
};

export default Products;