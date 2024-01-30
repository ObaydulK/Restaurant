import { useEffect, useState } from "react";
import MenuItem from "../../Shared/ManuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import ButtonBt from "../../../Components/ButtonBt/ButtonBt";
import { Link } from "react-router-dom";

const MenuCatagory = ({ items , title, img }) => {

    // const [menu] = useMenu();
    // const salad = menu.filter(item=>item.category === 'salad' );


    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const MenuItems = data.filter(item => item.category === 'salad');
    //             setMenu(MenuItems)
    //         })
    // }, [])

    return (
        <section>
            {title && <Cover img={img} title={title} />}

            <div className="grid md:grid-cols-2 gap-4 my-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/orderfood/${title}`}>
            <ButtonBt Button='ORDER YOUR FAVOURITE FOOD' />
            </Link>
        </section>
    );
};

export default MenuCatagory;