import styled from "styled-components";
import {FONT_BASE, FONT_SMALL, FONT_MED, FONT_LARGE} from "../../globalStyles.js"

export const ContentContainer = styled.div`

    background: #151925;
    position: relative;
    height: 100vh;
    color: white;

`;

/* --------------------------------- Prompt --------------------------------- */

export const PromptContainer = styled.div`

    top: 8vh;
    left: 4vw;

    position: absolute;
    width: 40vw;
    height: 85vh;
    background-color: #15202b;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    font-size: ${FONT_LARGE};
    color: wheat;

`;

export const PromptForm = styled.form`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  

`;

export const TextBox = styled.textarea`

  width: 38vw;
  height: 75vh;

  display: flex;
  text-align: left;
  padding: 15px 10px 10px 10px;
  border-radius: 1.1em;
  margin-bottom: 5.5vh;

`;

export const SubmitButton = styled.input`

  position: relative;
  right: 10px;
  bottom: 10px;
  background: wheat;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px; 
  &:hover {
    background: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #000;
  }
  //breakpoints
  @media screen and (max-width: 900px) {
    padding: 12px 60px;
  }
  @media screen and (max-width: 750px) {
    padding: 10px 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 8px 20px;
  }
`;

/* -------------------------------- Response -------------------------------- */

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