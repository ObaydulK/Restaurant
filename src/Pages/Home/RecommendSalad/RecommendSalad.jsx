import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import saladimg from "../../../assets/home/slide1.jpg"
import saladimg2 from "../../../assets/home/slide2.jpg"
import saladimg3 from "../../../assets/home/slide3.jpg"


const RecommendSalad = () => {
    return (
        <section className="mb-20">
            <div>
                <SectionTitle
                    SubHeading="Should Try"
                    heading="CHEF RECOMMENDS"
                ></SectionTitle>
            </div>

            <div className="grid grid-flow-row grid-cols-3 my-10 gap-6">
                <div className="card card-compact   bg-white shadow-xl text-black">
                    <figure><img src={saladimg} className="w-full h-96" alt="salad img" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title font-bold text-3xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 text-black font-bold border-b-4">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact   bg-white shadow-xl text-black">
                    <figure><img src={saladimg2} className="w-full h-96" alt="salad img" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title font-bold text-3xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 text-black font-bold border-b-4">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact   bg-white shadow-xl text-black">
                    <figure><img src={saladimg3} className="w-full h-96" alt="salad img" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title font-bold text-3xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 text-black font-bold border-b-4">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>









        </section>
    );
};

export default RecommendSalad;