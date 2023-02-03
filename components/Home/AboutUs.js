import React from 'react';
import Image from 'next/image';

const AboutUs = ({ props }) => {
    console.warn(props);
    return (
        <div className="welcome-area pb-100">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 pl-0">
                        <div className="welcome-item welcome-left welcome-left-two">
                            {props?.image?.sourceUrl ? (
                                <Image
                                    className=""
                                    src={props?.image?.sourceUrl}
                                    title={props?.image?.title}
                                    width={props?.image?.mediaDetails?.width}
                                    height={props?.image?.mediaDetails?.height}
                                    alt={props?.image?.mediaDetails?.altText}
                                />
                            ) : null}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="welcome-item welcome-right">
                            <div className="section-title-two">
                                {/* <span>About Us</span> */}
                                <h2>{props?.title}</h2>
                            </div>
                            <ul>
                                {props?.list?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <i
                                                className={`icofont-${item.icon}`}
                                            ></i>
                                            <div className="welcome-inner">
                                                <h3>{item?.title}</h3>

                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.content,
                                                    }}
                                                />
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
