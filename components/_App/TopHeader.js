import React from 'react';

const TopHeader = ({ contactinfo }) => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-8 col-lg-9">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li>
                                        <a href="tel:+07554332322">
                                            <i className="icofont-ui-call"></i>
                                            Call : {contactinfo?.phone}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@TimothyElloway.com">
                                            <i className="icofont-ui-message"></i>
                                            {contactinfo?.email}
                                        </a>
                                    </li>
                                    <li>
                                        <i className="icofont-location-pin"></i>
                                        {contactinfo?.cidLink ? (
                                            <a
                                                href={contactinfo.cidLink}
                                                target="_blank"
                                            >
                                                {contactinfo?.address}
                                            </a>
                                        ) : (
                                            <>{contactinfo.address}</>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <ul>
                                    <li>
                                        <a
                                            href={contactinfo?.facebook}
                                            target="_blank"
                                        >
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={contactinfo?.twitter}
                                            target="_blank"
                                        >
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={contactinfo?.linkedin}
                                            target="_blank"
                                        >
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={contactinfo?.instagram}
                                            target="_blank"
                                        >
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
