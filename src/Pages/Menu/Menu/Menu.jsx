import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import MenuCatagory from "../MenuCatagory/MenuCatagory";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ButtonBt from "../../../Components/ButtonBt/ButtonBt";

// this is img part 
import OfferedImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');





    return (
        <div >
            <Helmet>
                <title>Restaurant || Menu</title>
            </Helmet>
            <>
                <Cover img={OfferedImg} title={"Our Menu"} />
                <SectionTitle SubHeading="Don't miss" heading="TODAY'S OFFER" />
                <MenuCatagory items={offered} /> 
            </>
            <>
                {/* <Cover img={dessertImg} title={"Desserts"} /> */}
                <MenuCatagory items={dessert} title="Desserts" img={dessertImg} /> 
            </>
            <>
                {/* <Cover img={dessertImg} title={"Desserts"} /> */}
                <MenuCatagory items={pizza} title="pizza" img={pizzaImg} /> 
            </>
            <>
                {/* <Cover img={dessertImg} title={"Desserts"} /> */}
                <MenuCatagory items={salad} title="salad" img={saladImg} /> 
            </>
            <>
                {/* <Cover img={dessertImg} title={"Desserts"} /> */}
                <MenuCatagory items={soup} title="soup" img={soupImg} /> 
            </>


        </div>
    );
};

export default Menu;