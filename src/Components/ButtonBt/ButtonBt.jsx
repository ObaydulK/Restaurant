
const ButtonBt = ({ Button }) => {
    return (
        <div  className="text-center m-auto md:w-4/12 my-10" >
            <button className="btn btn-outline border-0 border-b-4 text-2xl px-8 py-2  uppercase text-black"> {Button}</button>
        </div>
    );
};

export default ButtonBt;