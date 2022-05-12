import React from 'react';

/* -------------------------------- Particles ------------------------------- */
import ParticleBackground from "../ParticleBackground/index";

/* ---------------------------- Styled-Components --------------------------- */
import {HeroFlexContent, HeroH1, HeroH2, HeroH3, HeroP, HeroSlide, HeroSliderH2, HeroBtn } from "./HeroElements"


function Hero() {

    return (
        <div>
            <ParticleBackground />

            <HeroFlexContent>

                <HeroH1>hAIku</HeroH1>

                <HeroSlide>

                    <HeroSliderH2>Write me a haiku</HeroSliderH2>
                    <HeroSliderH2>Tell me about an adventure</HeroSliderH2>
                    <HeroSliderH2>Name my new song</HeroSliderH2>
                    <HeroSliderH2>What should I name my cat</HeroSliderH2>

                </HeroSlide>

                <HeroBtn>Ask hAIku</HeroBtn>

            </HeroFlexContent>

        </div>
    );
}

export default Hero;
