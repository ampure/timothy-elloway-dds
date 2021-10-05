import React from 'react';
import Link from 'next/link';

const Services = ({ services }) => {
    return (
        <React.Fragment>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="section-title-two">
                        <span>Services</span>
                        <h2>Our Clinic Services</h2>
                    </div>
                    <div className="row">
                        {services.map((service, index) => {
                            return (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <div className="service-item">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <div className="service-front">
                                                    <i
                                                        className={`icofont-${service?.card?.icon}`}
                                                    ></i>
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
                                                    <i
                                                        className={`icofont-${service?.card?.icon}`}
                                                    ></i>
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
                                                        href={`/services/${service?.slug}`}
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
