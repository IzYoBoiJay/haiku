import React from 'react';
import { GlobalStyle } from './globalStyles';

import Hero from './components/Hero';
import Content from './components/Content';

function App() {

    return (
        <>
        <GlobalStyle />
        <Hero/>
        <Content/>
        </>
    );
}

export default App;
