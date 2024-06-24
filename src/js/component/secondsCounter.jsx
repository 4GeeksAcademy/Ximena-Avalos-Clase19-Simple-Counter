import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
    const secondsStr = String(props.seconds).padStart(6, '0').split('');

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3">
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center p-2 mx-1 rounded" style={{ width: '50px', height: '70px' }}>
                <i className="far fa-clock" style={{ fontSize: '2rem' }}></i>
            </div>
            {secondsStr.map((digit, index) => (
                <div key={index} className="bg-secondary text-white d-flex align-items-center justify-content-center p-2 mx-1 rounded" style={{ width: '50px', height: '70px', fontSize: '2rem' }}>
                    {digit}
                </div>
            ))}
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};