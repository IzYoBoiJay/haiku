//CSS elements for Hero main page
import styled, { keyframes } from "styled-components";
import {FONT_BASE, FONT_SMALL, FONT_MED, FONT_LARGE} from "../../globalStyles.js"

/* ------------------------------- Animations ------------------------------- */
const slideAnim = keyframes`

    0% {
        top: 0;
    }
    25% {
        top: -${FONT_MED};
    }
    50% {
        top: calc((${FONT_MED} * -1) * 2);
    }
    75% {
        top: calc((${FONT_MED} * -1) * 3);
    }

`;

/* ------------------------------- Styled Tags ------------------------------ */
export const HeroContainer = styled.div`

    color: white;


`;

export const HeroFlexContent = styled.div`

    color: white;

    display: flex; //Flex container
    flex-direction: column; //Main axis vertical
    justify-content: center; //Center items vertically
    align-items: center; //Center items horizontally

    height: 100vh;


`;

export const HeroH1 = styled.h1`

    font-size: ${FONT_LARGE};
    filter: drop-shadow(0 1px 3px);
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;


`;

export const HeroH2 = styled.h2`

    font-size: ${FONT_MED};
    text-transform: uppercase;
    font-style: italic;
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;

`;

export const HeroH3 = styled.h3`

    font-size: ${FONT_SMALL};
    text-transform: uppercase;
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;

`;

export const HeroP = styled.p`

    font-size: ${FONT_BASE};

`;

export const HeroBtn = styled.a`

    margin-top: 1vw;

    text-align: center;
    text-decoration: none;
    font-size: ${FONT_BASE};
    background: white;
    color: #222324;
    white-space: nowrap;
    border-radius: 30px;
    padding: 16px 64px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
    background: #222324;
    color: white;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    }

`;

/* --------------------------------- Slider --------------------------------- */
export const HeroSliderH2 = styled(HeroH2)`

    text-align: center;

`;

export const HeroSlide = styled.div`

    margin-top: 1vw;
    margin-bottom: 1vw;

    height: ${FONT_MED};
    line-height: ${FONT_MED};
    overflow: hidden;

    & ${HeroSliderH2} {

        top: 0;
        position: relative;
        animation: ${slideAnim} 10s infinite;

    }

`;