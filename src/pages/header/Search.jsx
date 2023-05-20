import React from 'react';
import { useRef } from 'react';
import useProjects from '../../hook/useProject';

const Search = () => {

    let { Buscar, setSeleccionar, Seleccionar } = useProjects();

    let busqueda = useRef()


    return (
        <>
            <form className="form_Header">
                <div className="form_box1">
                    <input type="text" placeholder="name o number pokemon" className='input_Header' ref={busqueda} />
                    <button className='button_Header' type='submit' onClick={(e) => {
                        e.preventDefault();
                        Buscar(busqueda.current.value)
                    }}>Buscar</button>
                </div>
                <div className="form_box2">
                    <button className='button_Seleccionar' onClick={(e) => {
                        e.preventDefault();
                        setSeleccionar(!Seleccionar)
                    }}>{Seleccionar ? "Eliminar" : "Seleccionar"}</button>
                </div>
            </form>
        </>
    );
}

export default Search;
