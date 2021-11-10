import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 9000,
    autoplayHoverPause: true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>",
    ],
};

const HeroSlider = ({ slides }) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);
    return (
        <React.Fragment>
            {display ? (
                <OwlCarousel
                    className="home-slider home-slider-two owl-carousel owl-theme"
                    {...options}
                >
                    {slides?.map((item, idx) => {
                        return (
                            <div className="slider-item" key={idx}>
                                {item?.headerimage &&
                                item?.headerimage?.sourceUrl ? (
                                    <Image
                                        src={item?.headerimage?.sourceUrl}
                                        title={item?.headerimage?.title}
                                        // width={item?.headerimage?.mediaDetails?.width}
                                        // height={
                                        //     item?.headerimage?.mediaDetails?.height
                                        // }
                                        alt={
                                            item?.headerimage?.mediaDetails
                                                ?.altText
                                        }
                                        layout="fill"
                                        // placeholder="blur"
                                        objectFit="cover"
                                        quality="90"
                                        priority="true"
                                    />
                                ) : null}
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="container">
                                            <div className="slider-text">
                                                <div className="slider-shape">
                                                    <img
                                                        src="/images/about-shape1.png"
                                                        alt="Shape"
                                                    />
                                                </div>
                                                <h1>{item?.h1}</h1>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.headercontent,
                                                    }}
                                                />

                                                <div className="common-btn">
                                                    <Link href="/contact">
                                                        <a>Get Appointment</a>
                                                    </Link>
                                                    {/* <Link href="/about">
                                                        <a className="cmn-btn-right">
                                                            Learn More
                                                        </a>
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            ) : (
                ''
            )}
        </React.Fragment>
    );
};

export default HeroSlider;
