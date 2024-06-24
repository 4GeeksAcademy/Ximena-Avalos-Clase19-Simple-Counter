
import React, { useState, useEffect, useRef } from "react";


import { SecondsCounter } from "./secondsCounter";
import { Buttons } from "./buttons";

const Home = () => {
    const [segundos, setSegundos] = useState(0);
    const [cuentaRegresiva, setCuentaRegresiva] = useState(false);
    const [inicial, setInicial] = useState(100);
    const [activo, setActivo] = useState(true);
    const intervalId = useRef(null);

    useEffect(() => {
        if (activo) {
            if (cuentaRegresiva) {
                setSegundos(inicial);
                intervalId.current = setInterval(() => {
                    setSegundos(prevSegundos => prevSegundos > 0 ? prevSegundos - 1 : 0);
                }, 1000);
            } else {
                intervalId.current = setInterval(() => {
                    setSegundos(prevSegundos => prevSegundos + 1);
                }, 1000);
            }
        }

        return () => clearInterval(intervalId.current);
    }, [cuentaRegresiva, inicial, activo]);

    const toggleCuentaRegresiva = () => {
        setCuentaRegresiva(!cuentaRegresiva);
    };

    const pararContador = () => {
        setActivo(false);
        clearInterval(intervalId.current);
    };

    const resumirContador = () => {
        setActivo(true);
    };

    const reiniciarContador = () => {
        setSegundos(0);
        setActivo(true);
    };

    return (
        <>
            <SecondsCounter seconds={segundos} />
            <Buttons
                toggleCuentaRegresiva={toggleCuentaRegresiva}
                pararContador={pararContador}
                resumirContador={resumirContador}
                reiniciarContador={reiniciarContador}
                cuentaRegresiva={cuentaRegresiva}
            />
        </>
    );
};

export default Home;
