import Catagory from "../../Catagory/Catagory";
import PapularMenu from "../../PapularMenu/PapularMenu";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Catagory/> 


            <PapularMenu/>

            <Feature/>
            <Testimonials/>
        </div>
    );
};

export default Home;