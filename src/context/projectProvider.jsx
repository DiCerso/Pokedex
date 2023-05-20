import React, { createContext, useEffect } from 'react';
import { clientAxios } from '../config/clientAxios';
import { useState } from 'react';


const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {

    const [List, setList] = useState([]);
    const [loading, setloading] = useState(true);

    const [ShowModal, setShowModal] = useState(false);
    const [ModalDat, setModalDat] = useState({});

    const [ScrollPokemons, setScrollPokemons] = useState(0);
    const [busqueda, setbusqueda] = useState("");

    const [Seleccionar, setSeleccionar] = useState(false);
    const [Bloqued, setBloqued] = useState(JSON.parse(sessionStorage.getItem('miArray')) || []);

    useEffect(() => {
        if(!Seleccionar){
            banear()
        }
    }, [Seleccionar])

    const All = async () => {
        setloading(true)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await clientAxios.get(`/pokemon?limit=40&offset=${ScrollPokemons}`, config);
            let newData = List.concat(data.results);
            setList(newData);
        } catch (error) {
            const response = {
                status: 500,
                ok: false,
                msg: 'no se pudo encontrar el pokemon',
                error: error
            }
            return response;
        } finally {
            setloading(false)
            setScrollPokemons(ScrollPokemons + 40);
        }
    }




    const nuevo = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await clientAxios.get(`/pokemon?limit=40&offset=${ScrollPokemons}`, config);
            let newData = List.concat(data.results);
            setList(newData);
        } catch (error) {
            const response = {
                status: 500,
                ok: false,
                msg: 'no se pudo encontrar el pokemon',
                error: error
            }
            return response;
        } finally {
            setScrollPokemons(ScrollPokemons + 40);
        }
    }


    const One = async (value, setDato) => {
        try {
            setloading(true)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await clientAxios.get(`/pokemon/${value.toLowerCase()}`, config);
            setDato(data);
            console.log(data);
        } catch (error) {
            const response = {
                status: 500,
                ok: false,
                msg: 'no se pudo encontrar el pokemon',
                error: error
            }
            console.log(response)
            return response;
        } finally {
            setloading(false)
        }
    }


    const Buscar = async (value) => {
        try {
            setloading(true)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            if (value != "") {
                const { data } = await clientAxios.get(`/pokemon/${value.toLowerCase()}`, config);
                setbusqueda([data]);
            } else {
                setbusqueda("");
            }
        } catch (error) {
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                const { data } = await clientAxios.get(`/ability/${value.toLowerCase()}`, config);
                let newArray = [];
                data.pokemon.forEach((element) => {
                    newArray.push({ "name": element.pokemon.name })
                });
                setbusqueda(newArray);
            } catch (error) {
                const response = {
                    status: 500,
                    ok: false,
                    msg: 'no se pudo encontrar el pokemon o habilidad',
                    error: error
                }
                setbusqueda(undefined)
                return response;
            } finally {
                setloading(false)
            }
        } finally {
            setloading(false)
        }
    }

    let banear = async () => {
        sessionStorage.setItem('miArray', JSON.stringify(Bloqued));
        All()
    }




    return (
        <ProjectContext.Provider
            value={{
                All,
                One,
                List,
                loading,
                ShowModal,
                setShowModal,
                setModalDat,
                ModalDat,
                setScrollPokemons,
                ScrollPokemons,
                nuevo,
                Buscar,
                busqueda,
                setSeleccionar,
                Seleccionar,
                setBloqued,
                Bloqued,
                banear
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
}



export {
    ProjectProvider
}

export default ProjectContext;

