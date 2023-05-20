import React, { useEffect, useState } from 'react';
import useProjects from '../../hook/useProject';


const Cards = ({ _name }) => {

    const { One, dato, setModalDat, setShowModal, Seleccionar, setBloqued, Bloqued} = useProjects();
    let datos = {};
    const [Dato, setDato] = useState({});
    const [seleccionado, setseleccionado] = useState(false);

    useEffect(() => {
        One(_name, setDato);
    }, []);

    useEffect(() => {
        if(seleccionado){
            let newArray = Bloqued;
            newArray.push(_name);
            setBloqued(newArray);
        }
    },[Seleccionar])

    return (
        <div className="card">
            {
                Seleccionar &&
                <div className="checkbox" onClick={() => { setseleccionado(!seleccionado) }}>
                    <div className="checkmark">
                        {seleccionado &&
                            <i className="fa-solid fa-check" style={{ color: "black" }} ></i>

                        }
                    </div>
                </div>
            }
            <div className="card_image_box">
                <img src={Dato.sprites?.front_default ? Dato.sprites.front_default : '/not-found.jpg'} alt="pokemon" className='card_img' />
            </div>
            <div className="card_content">
                <h3 className="card_title">#{Dato.id} {_name}</h3>
                <p className="card_description">{ }</p>
                <button className="card_button" onClick={() => {
                    setModalDat(Dato);
                    setShowModal(true);
                }} >Mas info</button>
            </div>
        </div>
    );
}

export default Cards;
