import ButtonBt from "../../../Components/ButtonBt/ButtonBt";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg"
import "./Feature.css"


const Feature = () => {
    return (
        <section className="Feature-item pt-10 text-white ">
            <div className=" ">
                <SectionTitle
                    SubHeading="Check it out"
                    heading="From Our Menu"
                ></SectionTitle>
            </div>
            <div className=" pb-20">
                <div className="md:flex justify-center items-center bg-stone-500 bg-opacity-45 gap-4 py-12 px-36 ">
                    <div>
                        <img src={feature} alt="" />
                    </div>
                    <div>
                        <p>26 Jun 2024</p>
                        <p className="uppercase"> Where Can i get some?</p>
                        <p className="font-bold text-2xl">Lorem ipsum dolor, sit amet consectetur  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis accusamus blanditiis, enim reprehenderit eos ipsa nihil, eligendi est mollitia laudantium adipisci assumenda amet deleniti dolores! Temporibus praesentium ex odit consequuntur. adipisicing elit. Molestiae omnis odit quisquam provident animi blanditiis nobis, aliquam maxime ducimus accusantium, in esse nesciunt? Sequi iure libero iste quidem, impedit quod?</p>
                        {/* <button className="btn btn-outline border-0 border-b-4 text-black"> Order Now</button> */}
                        <ButtonBt
                            Button='Order Now'
                        ></ButtonBt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;