import React, { createContext, useState } from 'react';
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import Footer from '../components/footer/Footer'

export const FMContext = createContext()

const RadioScreen = () => {
    const [FMname, setFMname] = useState(false)

    return (
        <div style={{ marginTop: 25 }}>
            <FMContext.Provider value={[FMname, setFMname]}>
                <Header />
                <Body />
                <Footer />
            </FMContext.Provider>
        </div>
    );
};

export default RadioScreen;