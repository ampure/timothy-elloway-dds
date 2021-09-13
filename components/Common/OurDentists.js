import React from 'react';
import Link from 'next/link';

const OurDentists = () => {
    return (
        <div className="Dentists-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Dentists</h2>
                </div>

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
                                        <a>Dr. Addision Smith</a>
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
                                        <a>Dr. Sarah Tylor</a>
                                    </Link>
                                </h3>
                                <span>Dental Surgeon</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Dentist-btn">
                    <Link href="/staff-details">
                        <a>See All</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurDentists;
