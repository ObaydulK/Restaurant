import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const ContactFrom = () => {
    return (
        <div>
            <SectionTitle SubHeading='send us a message' heading='Contact form' />


            <div className="  min-h-screen text-black mb-40 ">
                <div className=" bg-slate-300 flex-col">
                    <div className="  shrink-0 w-full shadow-2xl  ">
                        <form className="card-body">
                            <div className="flex flex-row gap-4 ">
                                <div className="  w-3/6">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Name*</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input bg-white  w-full" required />
                                </div>
                                <div className=" w-3/6">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Email*</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input bg-white  w-full" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black text-2xl">Password*</span>
                                </label>
                                <input type="number" placeholder="Enter Your Phone Number" className="input bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black text-2xl">Message*</span>
                                </label>
                                <input type="text" placeholder="Write your Message Here" className="input bg-white pt-5 pb-40 :" required />
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className=" bg-[#835D23] py-3 rounded" value=' Send Message' />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>







        </div>
    );
};

export default ContactFrom;