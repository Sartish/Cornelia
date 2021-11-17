import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const LogoContainer = styled.div`
    width: 400px;
    margin-left: 60px;
    text-align: center;
    @media (min-width: 768px) {
        margin-left: 0px
        }
        @media (min-width: 1024px) {
            margin-left: 60px;
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