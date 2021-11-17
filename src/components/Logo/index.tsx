import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const LogoContainer = styled.div`
    width: 400px;
    text-align: center;
    padding-bottom:20px;
    @media (min-width: 768px) {
        padding-bottom:20px;
        margin-top: 20px;
        margin-left: 0px;
        font-size: 18px;
        }
    @media (min-width: 1024px) {
        margin-left: 30px;
        font-size: 18px;
        text-align: left;
        padding-bottom: 0px;
        margin-top: 0px;
        }
    ${tw`
        text-black
        font-family['Varela', sans-serif]
        `
    };
`

export function Logo() {
    return (
    <LogoContainer>
        Cornelia Mikaelsson
    </LogoContainer>
    )
}