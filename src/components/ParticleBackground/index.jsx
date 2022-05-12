import React from 'react'

/* -------------------------------- Particles ------------------------------- */
import Particles from 'react-tsparticles';
import ParticleConfig from "../../configs/ParticleConfig.json"
import { loadFull } from "tsparticles";


const ParticleBackground = () => {

    //Initialize Particles
    const particlesInit = async(main) => {
        await loadFull(main);
    };

    return (
        <Particles init ={particlesInit} options={ParticleConfig}></Particles>
    );
}

export default ParticleBackground;