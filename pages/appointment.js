import React from 'react';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import PageBanner from '../components/Common/PageBanner';

// data
import { getPage, getChildren } from '../lib/api';

const Appointment = ({ contact, servicesNav }) => {
    // console.warn(contact);
    return (
        <DefaultTemplate
            contact={contact}
            seo={contact?.seo}
            servicesNav={servicesNav}
        >
            <PageBanner
                pageTitle="Appointment"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Appointment"
                bgImage="page-title-one"
            />

            <div className="appointment-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center appointment-wrap-two">
                        <div className="col-lg-7">
                            <div className="appointment-item appointment-item-two">
                                <div className="appointment-shape">
                                    <img
                                        src="/images/hart-img1.png"
                                        alt="Shape"
                                    />
                                </div>

                                <h2>Book your appointment</h2>
                                <span>
                                    We will confirm your appointment as soon as
                                    possible
                                </span>

                                <div className="appointment-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-business-man-alt-1"></i>
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Your Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-ui-message"></i>
                                                    <label>Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Enter Your Email"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-ui-call"></i>
                                                    <label>Phone</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Your Number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-hospital"></i>
                                                    <label>Services</label>
                                                    <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect1"
                                                    >
                                                        <option>
                                                            Dental Care
                                                        </option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-Dentist"></i>
                                                    <label>Dentist</label>
                                                    <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect2"
                                                    >
                                                        <option>
                                                            Choose Your Dentist
                                                        </option>
                                                        <option>
                                                            John Smith
                                                        </option>
                                                        <option>
                                                            Sarah Taylor
                                                        </option>
                                                        <option>
                                                            Stevn King
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-business-man"></i>
                                                    <label>Age</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your Age"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn appointment-btn"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="appointment-item-two-right">
                                <div className="appointment-item-content">
                                    <h2>Working Hours</h2>
                                    <ul>
                                        <li>
                                            Monday{' '}
                                            <span>9:00 AM - 8:00 PM</span>
                                        </li>
                                        <li>
                                            Tuesday{' '}
                                            <span>9:00 AM - 8:00 PM</span>
                                        </li>
                                        <li>
                                            Wednesday{' '}
                                            <span>9:00 AM - 8:00 PM</span>
                                        </li>
                                        <li>
                                            Thursday{' '}
                                            <span>9:00 AM - 8:00 PM</span>
                                        </li>
                                        <li>
                                            Friday{' '}
                                            <span>9:00 AM - 8:00 PM</span>
                                        </li>
                                        <li>
                                            Saturday{' '}
                                            <span>9:00 AM - 8:00 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultTemplate>
    );
};

export default Appointment;

export const getStaticProps = async () => {
    const contact = await getPage('contact');
    const services = await getChildren('services');

    return {
        props: {
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
};
