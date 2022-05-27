import React, { useContext } from 'react';
import { FMContext } from '../../Screens/RadioScreen';
import styles from './Footer.module.css'

// Station Footer Component
const Footer = () => {
    const [FMname, setFMname] = useContext(FMContext)
    return (
        <div className='container'>
            <div className="row">
                <div className={styles.wrapper}>
                    <div className="col-sm-4">
                        <div className={styles.footerWrapper}>
                            <div className={styles.contents}>
                                <p>{FMname && "CURRENTLY PLAYING"}</p>
                                <h3 className={styles.title}>{FMname}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;