import styled from 'styled-components'
import { devices } from './devices'
import { colors } from './colors'

export const ContainerDiv = styled.div`

    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    line-height: 2rem;
    font-size: 1.1rem;

    /*media queries*/

    @media ${devices.mobileS} {
        max-width: 374px;
        width: 90%;
    }
    `;

export const TextElement = styled.p`
    color: ${colors.primary}
`

export const NavContainer = styled.nav`
    display: flex;
    width: 80%;
    flex-direction: row;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: .5rem;

    div {
        padding: .5rem;
        justify-content: space-around;
    }

    div:last-child {
        padding-right: 0rem;
    }


    .headline h2 {
        font-size: 1.8rem;
        display: flex;
        justify-content: flex-start;
    }

    .headline h4 {
        padding-top: .2rem;
        font-size: 1.1rem;
    }

    .items {
        display: flex;
        flex-direction: row;
    }
`

export const Border = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 80%;
    border-bottom: .25rem solid ${colors.primary};
    border-radius: .1rem;
`

export const AppContainer = styled.div`
    
    width: 70%;
    margin: 0 auto;
    
    @media ${devices.mobileS} {
        width: 100%;
    }
`;

export const PageContainer = styled.div`
    background-color: ${colors.background};
    height: auto;
    color: ${colors.text};
    height: 100vh;
`;