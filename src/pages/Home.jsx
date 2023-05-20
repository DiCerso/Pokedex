import React, { useEffect } from 'react';
import useProjects from '../hook/useProject';
import Cards from './home/cards';
import Modal from './home/Modal';
import Loadingpage from './home/loadingpage'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';


const Home = () => {

    const { All, List, loading, ShowModal, nuevo, busqueda, Bloqued } = useProjects();


    useEffect(() => {
        All()
    }, []);


    return (
        <div>
            {
                loading ?
                    <Loadingpage />
                    :
                    busqueda == "" ?
                        List.length ?
                            <InfiniteScroll className='List_cards' dataLength={List.length} next={() => { nuevo() }} hasMore={true} loader={<Loadingpage />} >
                                {
                                    List.map(({ name, url }) => {
                                        if (!Bloqued?.includes(name)) {
                                            return <Cards key={url} _name={name} />
                                        }
                                    })
                                }
                            </InfiniteScroll>
                            :
                            <div>
                                <img src="/Psyduck.jpg" alt="pokemon notfound" />
                                <h1>No hay pokemons </h1>
                            </div>
                        :
                        busqueda != undefined ?
                            <div className='List_cards'>
                                {busqueda.map(({ name }) => {
                                    if (!Bloqued?.includes(name)) {
                                        return <Cards key={name} _name={name} />
                                    } else {
                                        return <div>
                                            <img src="/bloqueo.jpg" alt="bloqueado" />
                                            <h1>Este pokemon esta Bloqueado</h1>
                                        </div>
                                    }
                                })}
                            </div>
                            :
                            <div>
                                <img src="/Psyduck.jpg" alt="pokemon notfound" />
                                <h1>No se encontro el pokemon</h1>
                            </div>
            }
            {ShowModal && <Modal />}
        </div >
    );
}

export default Home;
