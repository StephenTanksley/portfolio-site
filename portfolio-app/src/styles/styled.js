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
    font-family: Trebuchet MS, Arial

    /*media queries*/

    @media ${devices.mobileS} {
        max-width: 374px;
        width: 90%;
    }
    `;

export const TextElement = styled.p`
    color: ${colors.primary}
`

export const AppContainer = styled.div`
    
    width: 70%;
    margin: 0 auto;
    padding-top: 2.5rem;

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

export const SuperButton = styled.button`
    color: ${colors.primary}
    background: ${colors.secondary}
    border: 2px solid white;
    border-radius: .5rem;
`