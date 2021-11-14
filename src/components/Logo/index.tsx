import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const LogoContainer = styled.div`
    border: black 2px solid;
    width: 200px;
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