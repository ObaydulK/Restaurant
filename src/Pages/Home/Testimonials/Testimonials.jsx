import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <>
            <section className="my-10">
                <SectionTitle
                    SubHeading='What Our Clients Say'
                    heading='Testimonials'
                ></SectionTitle>


                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="mx-24 my-16 flex flex-col gap-4 items-center  ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h2 className="text-2xl text-orange-400">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>

            </section>
            {reviews.length}

        </>
    );
};

export default Testimonials;