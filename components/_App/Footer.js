import React from 'react';
import Link from 'next/link';
import ContactForm from '../Contact/ContactForm';

const Footer = ({ contactinfo }) => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-contact">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            <a href={contactinfo?.email}>
                                                {contactinfo?.email}
                                            </a>
                                            {/* <a href="mailto:hello@TimothyElloway.com">
                                                hello@TimothyElloway.com
                                            </a> */}
                                        </li>
                                        <li>
                                            <i className="icofont-stock-mobile"></i>
                                            <a
                                                href={`tel:${contactinfo?.phone}`}
                                            >
                                                Call: {contactinfo?.phone}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            {contactinfo?.name}
                                            <br />
                                            {contactinfo?.cidLink ? (
                                                <a
                                                    href={contactinfo.cidLink}
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

                        <div className="col-sm-6 col-lg-2">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link href="/about">
                                                <a>About us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Blog</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/Dentist">
                                                <a>Dentists</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>Our Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/smile-rehabilitation">
                                                <a>Smile Rehabilitation</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dental-implants">
                                                <a>Dental Implants</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/crowns">
                                                <a>Crowns</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/fillings">
                                                <a>Fillings</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dentures">
                                                <a>Dentures</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/bridges">
                                                <a>Bridges</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/endodontics">
                                                <a>Endodontics</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-feedback">
                                    <h3>Contact Us</h3>
                                    <ContactForm minimal={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>
                            Copyright &copy; {currentYear} Marketing for
                            Dentists by{' '}
                            <a href="https://www.ampure.site/" target="_blank">
                                Ampure
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
