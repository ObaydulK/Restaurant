// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Catagory.css';


// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg';
import slider2 from '../../assets/home/slide2.jpg';
import slider3 from '../../assets/home/slide3.jpg';
import slider4 from '../../assets/home/slide4.jpg';
import slider5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
const Catagory = () => {
    return (
        <>
            <section>
                <SectionTitle

                    SubHeading={"From 11.00am to 10.00 pm"}
                    heading={"Order Now"}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={slider1} alt="" /> <h1 className='text-4xl uppercase text-white -mt-16 text-center font-bold'>Salads</h1></SwiperSlide>
                    <SwiperSlide> <img src={slider2} alt="" /> <h1 className='text-4xl uppercase text-white -mt-16 text-center font-bold'>Soups</h1></SwiperSlide>
                    <SwiperSlide> <img src={slider3} alt="" /><h1 className='text-4xl uppercase text-white -mt-16 text-center font-bold'>Pizzas</h1></SwiperSlide>
                    <SwiperSlide> <img src={slider4} alt="" /><h1 className='text-4xl uppercase text-white -mt-16 text-center font-bold'>Desserts</h1></SwiperSlide>
                    <SwiperSlide> <img src={slider5} alt="" /><h1 className='text-4xl uppercase text-white -mt-16 text-center font-bold'>Salads</h1></SwiperSlide>
                </Swiper>
            </section>
            <div className="Bg-Catagory my-20 p-20">
                <div className='text-center p-24   bg-slate-50 text-black'>
                    <h1 className='uppercase md:text-5xl font-mono font-bold '>Bistro Boss</h1>
                    <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, aspernatur laborum aut fuga tempore at qui deleniti, porro veritatis libero quae animi, officia excepturi molestias hic dolores. Tenetur, perferendis qui.</p>
                </div>
            </div>


        </>
    );
};

export default Catagory;