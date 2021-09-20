import React from 'react';
import Link from 'next/link';

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
                                            <a href={contactinfo.email}>
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
                                            {contactinfo?.address}
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
                                            <Link href="/services/dental-implants">
                                                <a>Dental Implants</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/crowns">
                                                <a>Crowns</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/fillings">
                                                <a>Fillings</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/dentures">
                                                <a>Dentures</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/bridges">
                                                <a>Bridges</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/root-canals">
                                                <a>Root Canals</a>
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
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                id="your_message"
                                                rows="3"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                        <div className="text-left">
                                            <button
                                                type="submit"
                                                className="btn feedback-btn"
                                            >
                                                SUBMIT
                                            </button>
                                        </div>
                                    </form>
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
