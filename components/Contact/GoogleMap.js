import React from 'react';

const GoogleMap = () => {
    return (
        <div className="map-area">
            <iframe
                src="https://maps.google.com/maps?q=1074%20East%20Avenue,%20Suite%20S%20Chico,%20CA%2095926&t=&z=13&ie=UTF8&iwloc=&output=embed"
                height="550"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
