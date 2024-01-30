
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card  bg-white  shadow-xl ">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <h2 className="absolute right-0 mt-8 mr-8 bg-slate-900 text-white rounded px-2 "> {price}</h2>
            <div className="card-body items-center text-center">
                <h2 className="card-title uppercase font-serif">--- {name}--- </h2>
                <p className="text-2xl font-mono">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-1 border-b-4 text-black px-10 uppercase">Add to card</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;