
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {
    return (
        <Carousel>
            
            <div>
                <img src={img1} />
                <p className="legend">Obaydur</p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend">Rahman</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Rifat</p>
            </div>
            <div>
                <img src={img4} />
                <p className="legend">Kuasha</p>
            </div>
            <div>
                <img src={img5} />
                <p className="legend">Tayfur</p>
            </div>
            <div>
                <img src={img6} />
                <p className="legend"> Sorder</p>
            </div>
        </Carousel>
    );
};

export default Banner;