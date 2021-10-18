import React from 'react';

const AppointmentFormTwo = ({services}) => {
    return (
        <div className="appointment-area-three">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-7">
                        <div className="appointment-item appointment-item-two">
                            <h2>Request an appointment</h2>
                            <span>
                                We will confirm with you as soon as possible
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
                                                    {/* <option>Dental Care</option>
                                                    <option>Pathology</option>
                                                    <option>Diagnosis</option>
                                                    <option>Neurology</option>
                                                    <option>Cardiology</option> */}
                                                    {services?.map((item,index)=>{
                                                        return (<option value={item.title} key={index}>{item.title}</option>)
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-Dentist"></i>
                                                <label>Dentist</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Choose Your Dentist"
                                                />
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

                    <div className="col-lg-5 pr-0">
                        <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                            <img
                                src="/images/dentists/Dentist4.jpg"
                                alt="Dentist"
                            />

                            <div className="speciality-emergency">
                                <div className="speciality-icon">
                                    <i className="icofont-ui-call"></i>
                                </div>
                                <h3>For emergencies</h3>
                                <p>call 911</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentFormTwo;
