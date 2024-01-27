
const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;


    return (

        <div  className="flex gap-5 items-center">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}----------</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquam.</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;