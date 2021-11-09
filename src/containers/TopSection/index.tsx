import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { NavBar } from "../../components/NavBar.tsx";


const TopSectionContainer = styled.div`
    ${tw `
        w-full
        flex
        flex-col
        h-screen
        relative    
    `}

`;

const FirstpageSection = styled.div`
${tw`
    w-full
    flex
    flex-col
`}

`

const WorkDisplayed = styled.div`
  ${tw`
    background-color[antiquewhite]
    grid
    grid-cols-3
    gap-4
    `};
`;

const WorkItems = styled.div`
  ${tw`
    grid
    grid-cols-3
    gap-4 
    `};
`;



export function TopSection() {
    return (
    <TopSectionContainer>
        <FirstpageSection>
            <NavBar/>
            <WorkDisplayed>
                <WorkItems>1</WorkItems>
                <WorkItems>2</WorkItems>
                <WorkItems>3</WorkItems>
                <WorkItems>4</WorkItems>
                <WorkItems>5</WorkItems>
                <WorkItems>6</WorkItems>
                <WorkItems>7</WorkItems>
                <WorkItems>8</WorkItems>
                <WorkItems>9</WorkItems>
            </WorkDisplayed>
        </FirstpageSection>
    </TopSectionContainer>
    )
}