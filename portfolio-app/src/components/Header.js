import React from 'react'
import { NavContainer } from '../styles/styled'

export const Header = () => {

    return (
        <div>
            <NavContainer>
                <div>
                    <h2>Stephen Tanksley</h2></div>
                <div className='items'>
                    <div>Home</div>
                    <div>Programming</div>
                    <div>Music</div>
                    <div>Resume</div>
                    <div>Contact</div>
                </div>
            </NavContainer>    
        </div>
    )
}