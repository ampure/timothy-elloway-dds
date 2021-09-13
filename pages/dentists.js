import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Dentists = () => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner
                pageTitle="Meet Our Qualified Dentists"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Dentists"
                bgImage="page-title-five"
            />

            <div className="Dentist-search-area">
                <div className="container">
                    <form>
                        <div className="row Dentist-search-wrap">
                            <div className="col-sm-6 col-lg-6">
                                <div className="Dentist-search-item">
                                    <div className="form-group">
                                        <i className="icofont-Dentist-alt"></i>
                                        <label>Search</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Dentist Name"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn Dentist-search-btn"
                                    >
                                        <i className="icofont-search-1"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="Dentist-search-item">
                                    <div className="form-group">
                                        <i className="icofont-hospital"></i>
                                        <label>Category</label>
                                        <select className="form-control">
                                            <option>Neurosurgeon</option>
                                            <option>Cardiology</option>
                                            <option>Pathology</option>
                                            <option>Dental Care</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="Dentists-area Dentists-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist1.jpg"
                                        alt="Dentist"
                                    />

                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Babatunde</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist2.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Addition Smith</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist3.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Sarah Taylor</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist4.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Mac Smith</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist5.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Alinson Backer</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist6.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Jas Macham</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist7.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. John Micheal</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist8.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Shane Warne</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                            <div className="Dentist-item">
                                <div className="Dentist-top">
                                    <img
                                        src="/images/dentists/Dentist9.jpg"
                                        alt="Dentist"
                                    />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="Dentist-bottom">
                                    <h3>
                                        <Link href="/staff-details">
                                            <a>Dr. Luis Moris</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    );
};

export default Dentists;
