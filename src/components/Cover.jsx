import React from 'react'
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
    CustomButton
} from './Cover.elements';
import { BsSun, BsMoon } from 'react-icons/bs';

const Cover = ({ theme }) => {
    const icono = theme === 'light' ? <BsSun/> : <BsMoon/>;
    const leyenda = theme === 'light' ? 'Light Mode' : 'Dark Mode';
  return (
    <>
        <CoverContainer>
            <CoverWrapper>
                <InfoContainer>
                    { icono }
                    <h1>Hello, I'm in</h1>
                    <h1>{ leyenda }</h1>
                    <CustomButton>Get Started</CustomButton>
                </InfoContainer>
            </CoverWrapper>
        </CoverContainer>
    </>
  )
}

export default Cover