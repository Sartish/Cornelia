import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { Om } from "../../components/Om";
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
    `}

`;

const PageContainer= styled.div`
    ${tw`
        flex
        flex-col
        md:flex-row
        lg:flex-row
        justify-around
        `
    };
`


const AboutSection= styled.div`
    height: 750px;
    border: black solid 2px;
    ${tw`
        `
    };
`


const WorkDisplayedSectionOne = styled.div`
  ${tw`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-2
    border-solid
    gap-4
    `};
`;

const WorkDisplayedSectionTwo = styled.div`
  ${tw`
    grid
    grid-cols-1
    md:grid-cols-3
    lg:grid-cols-3
    border-solid
    gap-4
    `};
`;


const WorkItems = styled.div`
  ${tw`
     flex-1
    `};
`;

const Description = tw.p`

`;

const Image= styled.img`
    width: 400px;
    height: 350px;
    ${tw`
        font-family['Varela', sans-serif]
        font-black
        text-sm
        text-black
        `
    };
`


export function TopSection() {
    return (
    <TopSectionContainer>
            <NavBar/>
                <PageContainer>
                    <AboutSection>
                    <Om />
                    </AboutSection>
                    <WorkDisplayedSectionOne>
                    <WorkItems>  
                        <Image src={ImgOne} />
                        <Description>
                            <p>Stefan Löfven avgår</p>
                            <p>2021.11.10 Sydsvenskan</p>
                        </Description>
                        </WorkItems>
                    <WorkItems> 
                        <Image src={ImgTwo} />
                        <Description>
                            <p>Stefan Löfven avgår</p>
                            <p>2021.11.10 Sydsvenskan</p>
                        </Description>
                    </WorkItems>
                    <WorkItems> <Image src={ImgThree} /><
                    Description>About</Description></WorkItems>
                    <WorkItems>
                        <Image src={ImgFour} />
                        <Description>
                            <p>Stefan Löfven avgår</p>
                            <p>2021.11.10 Sydsvenskan</p>
                        </Description>
                    </WorkItems>
                    </WorkDisplayedSectionOne>
                </PageContainer>
                <WorkDisplayedSectionTwo>
                 <WorkItems>
                    <Image src={ImgFive} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                    </WorkItems>
                <WorkItems>
                    <Image src={ImgSix} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                    </WorkItems>
                <WorkItems>
                    <Image src={ImgSeven} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </WorkItems>
                <WorkItems>
                    <Image src={ImgNine} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </WorkItems>
                <WorkItems>
                    <Image src={ImgEleven} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </WorkItems>
                <WorkItems>
                    <Image src={ImgEleven} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </WorkItems>
                <WorkItems>
                    <Image src={ImgEleven} />
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </WorkItems>
                </WorkDisplayedSectionTwo>
    </TopSectionContainer>
    )
}