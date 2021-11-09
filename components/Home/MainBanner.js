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
                                {/* <Link href="/about">
                                    <a className="cmn-btn-right-two">
                                        Learn More
                                    </a>
                                </Link> */}
                            </div>

                            <div className="banner-right">
                                {/* <img
                                    src={props?.headerimage?.sourceUrl}
                                    alt={
                                        props?.headerimage?.mediaDetails
                                            ?.altText
                                    }
                                /> */}
                                <span className="banner-image">
                                    {props?.headerimage?.sourceUrl ? (<Image
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
                                    />):null}
                                </span>
                                <img
                                    src="/images/home/blob.svg"
                                    alt="Banner"
                                    className="blob1"
                                />
                                <img
                                    src="/images/home/blob2.svg"
                                    alt="Banner"
                                    className="blob2"
                                />
                                <img
                                    src="/images/about-shape1.png"
                                    alt="Banner"
                                    className="animated-bgimage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="heart-shape">
                {/* <img src="/images/heart-graph.png" alt="Banner" /> */}
            </div>
        </div>
    );
};

export default MainBanner;
