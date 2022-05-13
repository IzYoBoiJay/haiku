import React from 'react';
import { GlobalStyle } from './globalStyles';

import Hero from './components/Hero';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {

    return (
        <>
        <GlobalStyle />

        <Hero/>
        <Content/>
        
        <Navbar />
        </>
    );
}

export default App;
