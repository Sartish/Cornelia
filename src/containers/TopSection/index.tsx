import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { NavBar } from "../../components/NavBar.tsx";

//Images
import ImgOne from "../../assets/one.jpeg";
import ImgTwo from "../../assets/Two.jpeg";
import ImgThree from "../../assets/Three.jpeg";
import ImgFour from "../../assets/four.jpeg";
import ImgFive from "../../assets/five.jpeg";
import ImgSix from "../../assets/six.jpeg";
import ImgSeven from "../../assets/seven.jpeg";
import ImgNine from "../../assets/nine.jpeg";
import ImgEleven from "../../assets/eleven.jpeg";

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
    grid
    grid-cols-1
    md:grid-cols-3
    lg:grid-cols-4
    border-solid
    gap-4
    space-x-4
    `};
`;

const WorkItems = styled.div`
  ${tw`
    `};
`;

const Description = tw.p`
    text-black
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;


export function TopSection() {
    return (
    <TopSectionContainer>
        <FirstpageSection>
            <NavBar/>
            <WorkDisplayed>
                <WorkItems>  
                    <img src={ImgOne} />
                    <Description>About</Description></WorkItems>
                <WorkItems> 
                    <img src={ImgTwo} />
                    <Description>About</Description>
                </WorkItems>
                <WorkItems> <img src={ImgThree} /><
                Description>About</Description></WorkItems>
                <WorkItems>
                    <img src={ImgFour} />
                    <Description>About</Description></WorkItems>
                <WorkItems>
                    <img src={ImgFive} />
                    <Description>About</Description></WorkItems>
                <WorkItems>
                    <img src={ImgSix} />
                    <Description>About</Description>
                    </WorkItems>
                <WorkItems>
                    <img src={ImgSeven} />
                    <Description>About</Description>
                </WorkItems>
                <WorkItems>
                    <img src={ImgNine} />
                    <Description>About</Description>
                </WorkItems>
                <WorkItems>
                    <img src={ImgEleven} />
                    <Description>About</Description>
                </WorkItems>
            </WorkDisplayed>
        </FirstpageSection>
    </TopSectionContainer>
    )
}