import React from 'react';

const ContactInfo = ({ contact }) => {
    return (
        <div className="location-area pt-100 pb-70">
            <div className="container">
                <div className="row location-wrap">
                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-location-pin"></i>
                            <h3>Location</h3>
                            <p>{contact?.address}</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-ui-message"></i>
                            <h3>Email</h3>
                            <p>{contact?.email}</p>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-ui-call"></i>
                            <h3>Phone</h3>
                            <p>{contact?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
