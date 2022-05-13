// CSS for navbar components
import styled from "styled-components";
import {FONT_BASE, FONT_SMALL, FONT_MED, FONT_LARGE} from "../../globalStyles.js"

//NavBar
export const NavbarContainer = styled.nav`

    position: fixed;
    top: 0;
    width: 100vw;

    overflow: hidden;

    display: flex;
    align-items: center;
    text-align: center;

    padding: 1rem 4rem;
    height: 60px;
    gap: 4rem;
    font-size: ${FONT_SMALL};

`;

export const NavbarLink = styled.a`

    color: white;

    display: flex;
    align-items: center;
    text-decoration: none;

    cursor: pointer;
    
    p {

        &:hover, &:focus {

            text-decoration: underline;
            text-decoration-color: #458FFF;
            font-weight: bolder;

        }
    }

`;