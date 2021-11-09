import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const LogoContainer = styled.div`
    width: 400px;
    ${tw`
        font-family['Varela', sans-serif]
        font-black
        text-2xl
        text-black
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