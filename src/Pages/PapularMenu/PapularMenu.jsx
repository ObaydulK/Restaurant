import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/ManuItem/MenuItem";
import ButtonBt from "../../Components/ButtonBt/ButtonBt";
import useMenu from "../../Hooks/useMenu";


const PapularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item=>item.category === 'popular' );
   
   
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                heading={"Chack it out"}
                SubHeading={"From our Menu"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <ButtonBt
                Button="view Full menu"
            ></ButtonBt>
     
        </section>
    );
};

export default PapularMenu;