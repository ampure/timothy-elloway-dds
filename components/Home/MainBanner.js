import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainBanner = (props) => {
    return (
        <div className="banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-item">
                            <h1>{props?.h1}</h1>
                            <p>{props?.headercontent} </p>

                            <div className="common-btn-two">
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                                <Link href="/about">
                                    <a className="cmn-btn-right-two">
                                        Learn More
                                    </a>
                                </Link>
                            </div>

                            <div className="banner-right">
                                <img
                                    src={props?.headerimage?.sourceUrl}
                                    alt={
                                        props?.headerimage?.mediaDetails
                                            ?.altText
                                    }
                                />
                                {/* <Image
                                    className="banner-image"
                                    src={props?.headerimage?.sourceUrl}
                                    title={props?.headerimage?.title}
                                    width={
                                        props?.headerimage?.mediaDetails?.width
                                    }
                                    height={
                                        props?.headerimage?.mediaDetails?.height
                                    }
                                    alt={
                                        props?.headerimage?.mediaDetails
                                            ?.altText
                                    }
                                /> */}
                                <img
                                    src="/images/home/home-three-banner-shape2.png"
                                    alt="Banner"
                                />
                                <img
                                    src="/images/home/home-three-banner-shape2.png"
                                    alt="Banner"
                                />
                                <img
                                    src="/images/about-shape1.png"
                                    alt="Banner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="heart-shape">
                <img src="/images/heart-graph.png" alt="Banner" />
            </div>
        </div>
    );
};

export default MainBanner;
