import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ContactLocation = () => {
    return (
        <div>
            {/* heading section  */}
            <SectionTitle SubHeading="Visit Us" heading=" Our Location " />


            {/* phone section  */}
            <div className="grid grid-flow-row grid-cols-3 gap-10">
                <div className=" my-10 border-2 ">
                    <div className="w-full bg-[#D1A054] h-[70px] "> </div>
                    <div className="bg-slate-300 text-black mx-10 " >
                        <div className=" items-center text-center py-10 ">
                            <h2 className="  uppercase text-4xl">Phone </h2>
                            <p>+8801718792691</p>
                        </div>
                    </div>
                </div>
                <div className=" my-10 border-2 ">
                    <div className="w-full bg-[#D1A054] h-[70px] "> </div>
                    <div className="bg-slate-300 text-black mx-10 " >
                        <div className=" items-center text-center py-10 ">
                            <h2 className="  uppercase text-4xl"> Address</h2>
                            <p>+8801718792691</p>
                        </div>
                    </div>
                </div>
                <div className=" my-10 border-2 ">
                    <div className="w-full bg-[#D1A054] h-[70px] "> </div>
                    <div className="bg-slate-300 text-black mx-10 " >
                        <div className=" items-center text-center py-10 ">
                            <h2 className="  uppercase text-4xl"> Working Houres </h2>
                            <p> Mon-Rri 08:00 - 22:00</p>
                            <p> Sat-Sun 08:00 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactLocation;