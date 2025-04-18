import React from "react";
import Slider from "react-slick";

const Page5 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const carouselData1 = [
        "https://via.placeholder.com/300x200?text=Slide+1",
        "https://via.placeholder.com/300x200?text=Slide+2",
        "https://via.placeholder.com/300x200?text=Slide+3",
    ];

    const carouselData2 = [
        "https://via.placeholder.com/300x200?text=Slide+A",
        "https://via.placeholder.com/300x200?text=Slide+B",
        "https://via.placeholder.com/300x200?text=Slide+C",
    ];

    return (
        <div className="page5-container">
            <div className="carousel-grid">
                <div className="carousel-item">
                    <Slider {...settings}>
                        {carouselData1.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="carousel-item">
                    <Slider {...settings}>
                        {carouselData2.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Page5;