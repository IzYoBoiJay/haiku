import styled from "styled-components";
import {FONT_BASE, FONT_SMALL, FONT_MED, FONT_LARGE} from "../../globalStyles.js"

export const ContentContainer = styled.div`

    background: #151925;
    position: relative;
    height: 100vh;
    color: white;

`;

export const PromptContainer = styled.div`

    top: 8vh;
    left: 4vw;

    position: absolute;
    width: 40vw;
    height: 85vh;
    background-color: #15202b;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: ${FONT_LARGE};
    color: wheat;

`;

export const ResponseContainer = styled.div`

    top: 8vh;
    right: 4vw;

    position: absolute;
    width: 40vw;
    height: 85vh;
    background-color: #15202b;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: ${FONT_LARGE};
    color: wheat;

`;