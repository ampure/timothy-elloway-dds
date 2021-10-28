import React from 'react';
import dynamic from 'next/dynamic';
// import Image from 'next/image';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>",
    ],
};

const FeedbackSlider = ({ testimonials }) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);
    return (
        <div className="review-area ptb-100">
            <div className="container">
                {display ? (
                    <OwlCarousel
                        className="feedback-slider owl-carousel owl-theme"
                        {...options}
                    >
                        {testimonials?.map((testimonial, index) => {
                            return (
                                <div className="feedback-item" key={index}>
                                    <div className="client-img">
                                        {/* <Image
                                            className="banner-image"
                                            src={testimonial?.image?.sourceUrl}
                                            title={testimonial?.image?.title}
                                            width={
                                                testimonial?.image?.mediaDetails
                                                    ?.width
                                            }
                                            height={
                                                testimonial?.image?.mediaDetails
                                                    ?.height
                                            }
                                            alt={
                                                testimonial?.image?.mediaDetails
                                                    ?.altText
                                            }
                                        /> */}
                                        <h3>{testimonial?.name}</h3>
                                    </div>
                                    {testimonial?.googleReviewLink ? (
                                        <a
                                            href={testimonial?.googleReviewLink}
                                            target="_blank"
                                            dangerouslySetInnerHTML={{
                                                __html: testimonial?.quote,
                                            }}
                                        />
                                    ) : (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: testimonial?.quote,
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </OwlCarousel>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default FeedbackSlider;
