import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = ({ services, header, count }) => {
    if (count) {
        // featured services only! (homepage)
        services = services
            .filter((item) => item.card.featured === true)
            .slice(0, count);
    }
    return (
        <React.Fragment>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="section-title-two">
                        {/* <span>Services</span> */}
                        <h2>{header}</h2>
                    </div>
                    <div className="row">
                        {services.map((service, index) => {
                            return (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <div className="service-item">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <div className="service-front">
                                                    {service?.card?.icon ? (<i
                                                        className={`icofont-${service?.card?.icon}`}
                                                    ></i>): (service?.card?.iconImage ? (
                                                    <div className="icon mb-3">
                                                        <Image
                                                    
                                                        src={service?.card?.iconImage?.sourceUrl}
                                                        title={service?.card?.iconImage?.title}
                                                        width={
                                                            service?.card?.iconImage?.mediaDetails?.width
                                                        }
                                                        height={
                                                            service?.card?.iconImage?.mediaDetails?.height
                                                        }
                                                        alt={
                                                            service?.card?.iconImage?.mediaDetails
                                                                ?.altText
                                                        }
                                                    /></div>):'')}
                                                    <h3>
                                                        {service?.card?.name
                                                            ? service.card.name
                                                            : service?.title}
                                                    </h3>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: service
                                                                ?.card?.about,
                                                        }}
                                                    />
                                                </div>
                                                <div className="service-end">
                                                {service?.card?.icon ? (<i
                                                        className={`icofont-${service?.card?.icon}`}
                                                    ></i>): (service?.card?.iconImage ? (
                                                    <div className="icon mb-3">
                                                        <Image
                                                    
                                                        src={service?.card?.iconImage?.sourceUrl}
                                                        title={service?.card?.iconImage?.title}
                                                        width={
                                                            service?.card?.iconImage?.mediaDetails?.width
                                                        }
                                                        height={
                                                            service?.card?.iconImage?.mediaDetails?.height
                                                        }
                                                        alt={
                                                            service?.card?.iconImage?.mediaDetails
                                                                ?.altText
                                                        }
                                                    /></div>):'')}
                                                    <h3>
                                                        {service?.card?.name
                                                            ? service.card.name
                                                            : service?.title}
                                                    </h3>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: service
                                                                ?.card?.about,
                                                        }}
                                                    />

                                                    <Link
                                                        href={`/${service?.slug}`}
                                                    >
                                                        <a>Read More</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Services;
