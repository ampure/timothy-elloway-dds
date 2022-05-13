import React from 'react';

const TopHeader = ({ contactinfo }) => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-8 col-lg-9">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li className="">
                                        <a href="tel:+07554332322">
                                            <i className="icofont-ui-call"></i>
                                            Call : {contactinfo?.phone}
                                        </a>
                                    </li>
                                    <li className="d-none d-md-inline-block">
                                        <a href="mailto:hello@TimothyElloway.com">
                                            <i className="icofont-ui-message"></i>
                                            {contactinfo?.email}
                                        </a>
                                    </li>
                                    <li className="d-none d-md-inline-block">
                                        <i className="icofont-location-pin"></i>
                                        {contactinfo?.cidLink ? (
                                            <a
                                                href={contactinfo?.cidLink}
                                                target="_blank"
                                            >
                                                {contactinfo?.address}
                                            </a>
                                        ) : (
                                            <>{contactinfo?.address}</>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <ul>
                                    <li>
                                        <a
                                            href="https://g.page/EllowayChicoSmiles"
                                            target="_blank"
                                        >
                                            <i className="icofont-google-plus"></i>
                                        </a>
                                    </li>

                                    {contactinfo?.facebook &&
                                    contactinfo?.facebook != '' ? (
                                        <li>
                                            <a
                                                href={contactinfo?.facebook}
                                                target="_blank"
                                            >
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                    ) : null}
                                    {contactinfo?.twitter &&
                                    contactinfo?.twitter != '' ? (
                                        <li>
                                            <a
                                                href={contactinfo?.twitter}
                                                target="_blank"
                                            >
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                    ) : null}
                                    {contactinfo?.linkedin &&
                                    contactinfo?.linkedin != '' ? (
                                        <li>
                                            <a
                                                href={contactinfo?.linkedin}
                                                target="_blank"
                                            >
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    ) : null}
                                    {contactinfo?.instagram &&
                                    contactinfo?.instagram != '' ? (
                                        <li>
                                            <a
                                                href={contactinfo?.instagram}
                                                target="_blank"
                                            >
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                    ) : null}
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
