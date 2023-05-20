import React from 'react';
import useProjects from '../../hook/useProject';


const Modal = () => {

    const { setShowModal, setModalDat, ModalDat } = useProjects();

    console.log(ModalDat)
    return (
        <div className="modal">
            <section className="modal_content">
                <article className="modal_img_box">
                    <img src={ModalDat.sprites?.front_default ? ModalDat.sprites?.front_default : "/not-found.jpg"} alt="" className='modal_img' />
                </article>
                <h2>#{ModalDat.id} {ModalDat.name}</h2>
                <article className="modal_data">
                    <div className="modal_data_box">
                        <div className="modal_Habilities">
                            <p>Habilities: </p>
                            <ul className="modal_habilites">
                                {ModalDat.abilities.map((a) => {
                                    return <li key={a.ability.url}>{a.ability.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="modal_tamaño">
                            <p>sizes:</p>
                            <p>weight: {ModalDat.weight}</p>
                            <p>height: {ModalDat.height}</p>
                        </div>

                    </div>

                    <div className="modal_Stats_box">
                        <div className='modal_Stat'>
                            <div className="progress_bar">
                                <div className="progress" style={{ width: (ModalDat.stats[0].base_stat * 100) / 500 }}></div>
                            </div>
                            <p>HP : {ModalDat.stats[0].base_stat}</p> {/* maximo : 500 */}
                        </div>
                        <div className='modal_Stat'>
                            <div className="progress_bar">
                                <div className="progress" style={{ width: (ModalDat.stats[1].base_stat * 100) / 190 }}></div>
                            </div>
                            <p>Attack : {ModalDat.stats[1].base_stat}</p> {/* maximo : 190 */}
                        </div>
                        <div className='modal_Stat'>
                            <div className="progress_bar">
                                <div className="progress" style={{ width: (ModalDat.stats[2].base_stat * 100) / 250 }}></div>
                            </div>
                            <p>defense : {ModalDat.stats[2].base_stat}</p> {/* maximo : 250 */}
                        </div>
                        <div className='modal_Stat'>
                            <div className="progress_bar">
                                <div className="progress" style={{ width: (ModalDat.stats[3].base_stat * 100) / 180 }}></div>
                            </div>
                            <p>special-attack : {ModalDat.stats[3].base_stat}</p> {/* maximo : 180 */}
                        </div>
                        <div className='modal_Stat'>
                            <div className="progress_bar">
                                <div className="progress" style={{ width: (ModalDat.stats[4].base_stat * 100) / 230 }}></div>
                            </div>
                            <p>special-defense : {ModalDat.stats[4].base_stat}</p> {/* maximo : 230 */}
                        </div>
                        <div className='modal_Stat'>
                            <div className="progress_bar">
                                <div className="progress" style={{ width: (ModalDat.stats[5].base_stat * 100) / 180 }}></div>
                            </div>
                            <p>speed : {ModalDat.stats[5].base_stat}</p> {/* maximo : 180  */}
                        </div>
                    </div>
                </article>
                <article className='modal_buttons'>
                    <button className='Button_cerrar'  onClick={() => {
                        setShowModal(false)
                        setModalDat({})
                    }}>cerrar</button>
                </article>
            </section>
        </div>
    );
}

export default Modal;
