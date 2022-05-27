import React from 'react';
import styles from './Header.module.css'
import settings from '../../assests/settings.png'
import power from '../../assests/switch.png'
import { useNavigate } from 'react-router-dom';

// Station Header Component
const Header = () => {

    const handleNav = useNavigate()
    const handleNavigate = () => {
        handleNav('settings')
    }
    return (
        <div className='container'>
            <div className="row">
                <div className={styles.wrapper}>
                    <div className="col-sm-4">
                        <div className={styles.headerWrapper}>
                            <div className={styles.contents}>
                                <button onClick={() => handleNavigate()} type="button">
                                    <img title="Station Settings" className={styles.settings} src={settings} alt="Settings" />
                                </button>
                                <h3 className={styles.title}>STATIONS</h3>
                                <button type="button">
                                    <img title='Logout' className={styles.power} src={power} alt="Power Switch" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;