import React from "react";
import PropTypes from "prop-types";

export const Buttons = ({ toggleCuentaRegresiva, pararContador, resumirContador, reiniciarContador, cuentaRegresiva }) => {
    return (
        <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary mr-2" onClick={toggleCuentaRegresiva}>
                {cuentaRegresiva ? "Cuenta Ascendente" : "Cuenta Regresiva"}
            </button>
            <button className="btn btn-danger mr-2" onClick={pararContador}>
                Parar
            </button>
            <button className="btn btn-success mr-2" onClick={resumirContador}>
                Resumir
            </button>
            <button className="btn btn-warning" onClick={reiniciarContador}>
                Reiniciar
            </button>
        </div>
    );
};

Buttons.propTypes = {
    toggleCuentaRegresiva: PropTypes.func.isRequired,
    pararContador: PropTypes.func.isRequired,
    resumirContador: PropTypes.func.isRequired,
    reiniciarContador: PropTypes.func.isRequired,
    cuentaRegresiva: PropTypes.bool.isRequired,
};



