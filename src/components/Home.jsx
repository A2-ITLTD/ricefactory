import { useEffect } from "react";
import Baneer from "./Baneer";


const Home = () => {
    useEffect(() => {
        document.title = "Rice";
    }, []);
    return (
        <div>
           <Baneer></Baneer>
        </div>
    );
};

export default Home;