import React from "react";
import { useState } from "react";
import "./Etiquetas.css";

const Etiquetas = ({nombre}) => {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
            setActive(!isActive);
    }

    return (
            <button className={isActive? "btn--primario" : "btn--secundario"} onClick={handleToggle} type="button" >{nombre}</button>
    )};

export default Etiquetas;