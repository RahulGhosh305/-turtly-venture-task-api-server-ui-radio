import React, { useState, useContext, useEffect } from 'react';
// import AppData from '../../AppData';
import styles from './Body.module.css'
import minus from '../../assests/minus.png';
import plus from '../../assests/plus.png';
import radio from '../../assests/radio.png';
import { FMContext } from "../../Screens/RadioScreen";

// Station Body Content
const Body = () => {
    const [activeIndex, setActiveIndex] = useState("");
    const [FMname, setFMname] = useContext(FMContext)
    const [appData, setAppData] = useState([])

    //### GET/READ ALL RADIO CHANNEL
    useEffect(() => {
        fetch("http://localhost:5000/channel")
            .then(res => res.json())
            .then(data => {
                setAppData(data)
            })
    }, [])


    const setIndexActive = (index, name) => {
        setActiveIndex(index)
        setFMname(name)
    }

    const setIndexInActive = () => {
        setActiveIndex("")
        setFMname("")
    }

    return (
        <div className="container">
            <div className="row">
                <div className={styles.wrapper}>
                    <div className={`col-sm-4 ${styles.bodyWrapper}`}>
                        {
                            appData.map((item, index) => {
                                const isActive = index === activeIndex
                                return (
                                    <div
                                        key={index}
                                        className={styles.accordionWrapper}
                                        onClick={() =>
                                            isActive ? setIndexInActive() : setIndexActive(index, item.name)
                                        }
                                    >
                                        {/* accordion hideing toggle part */}
                                        <div
                                            style={{ backgroundColor: "#2b2b35" }}
                                            className={
                                                !isActive ? `${styles.displayNone}` : `${styles.displayShow} ${styles.accordionContent}`}
                                        >
                                            <div className={styles.contentWrapper}>
                                                <button type='button'>
                                                    <img className={styles.minus} src={minus} alt="Minus" />
                                                </button>
                                                <img className={styles.radio} src={radio} alt="pic" />
                                                <button type='button'>
                                                    <img className={styles.plus} src={plus} alt="Plus" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Render Part */}
                                        <div className={styles.accordion}>
                                            <div className={styles.contents}>
                                                <h4>{item.name}</h4>
                                                <h4>{item.frequency}</h4>
                                            </div>
                                        </div>
                                        <hr className={styles.horizontal} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;