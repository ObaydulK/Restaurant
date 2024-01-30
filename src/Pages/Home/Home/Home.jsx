import { Helmet } from "react-helmet-async";
import Catagory from "../../Catagory/Catagory";
import PapularMenu from "../../PapularMenu/PapularMenu";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import RecommendSalad from "../RecommendSalad/RecommendSalad";
import Testimonials from "../Testimonials/Testimonials";
import CallNow from "../CallNow/CallNow";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant || Home</title>
            </Helmet>
            <Banner />
            <Catagory />
            <PapularMenu /> 
            <CallNow/>
            <RecommendSalad />
            <Feature />
            <Testimonials />
        </div>
    );
};

export default Home;