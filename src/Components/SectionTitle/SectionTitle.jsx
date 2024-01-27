 






const SectionTitle = ({heading, SubHeading , obaydul}) => {
    return (
        <div className="   text-center m-auto md:w-4/12 my-10">
            <h1 className="text-yellow-600 pb-2">---{SubHeading}---</h1>
            <p className="text-5xl uppercase border-y-4 py-4">{heading}</p>
            
            <h1 className="text-9xl uppercase font-serif">{obaydul}</h1>
        </div>
    );
};

export default SectionTitle;