import { useState } from "react";
import OrderFoodImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
// import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams ();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)


    
    const [menu] = useMenu();
    // const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (

        <div >
            <Cover img={OrderFoodImg} title="order Food" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dignissimos ipsa tempora! Aliquid et ullam velit quaerat saepe, ex maiores ipsam amet ea deleniti tenetur qui alias illum reprehenderit fugit?" />
            <div className="text-center p-10 font-bold text-2xl   ">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel> <OrderTab items={salad} /> </TabPanel>
                    <TabPanel> <OrderTab items={pizza} /> </TabPanel>
                    <TabPanel> <OrderTab items={soup} /> </TabPanel>
                    <TabPanel> <OrderTab items={dessert} /> </TabPanel>
                    <TabPanel> <OrderTab items={drinks} /> </TabPanel>

                </Tabs>

            </div>












        </div>
    );
};

export default OrderFood;