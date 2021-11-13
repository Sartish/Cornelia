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
border: black solid 2px;
  ${tw`
  flex
  flex-col
    `};
`;


const HeaderContainer = styled.div`
margin-top: 50px;
border: black solid 2px;
  ${tw`
  flex-row
  justify-center
  flex
  md:hidden
  lg:hidden
    `};
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
    height: 900px;
    border: black solid 2px;
    @media (min-width: 768px) {
    height: 750px;
          }
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
height: 400px;
width: 300px;
border: black 2px solid;
@media (min-width: 768px) {
height: 400px;
width: 450px;
  }
  ${tw`
     flex-1
     relative
     items-center
     justify-center
    `};
`;

const Overlay = styled.div`
border: 2px black;
width: 300px;
height: 350px;
@media (min-width: 768px) {
    width: 400px;
    height: 350px;
    }

  ${tw`
    absolute
    `};
`;

const OverlayText = styled.p`
background-image: linear-gradient(rgba(255, 255, 0, 0.8), rgba(255, 255, 0, 0.8));
cursor: pointer; 
  ${tw`
  opacity-0 
  hover:opacity-100 duration-500 
  absolute inset-0 z-10 
  flex justify-center 
  items-center 
  text-4xl 
  text-black 
  font-semibold
    `};
`;


const Description = styled.p`
border: black solid 2px;
  ${tw`
  text-black
    `};
`;

const Image= styled.img`
    width: 300px;
    height: 350px;
    @media (min-width: 768px) {
        width: 400px;
        height: 350px;
          }
    ${tw`
        font-family['Varela', sans-serif]
        font-black
        text-sm
        text-black
        flex
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
            <HeaderContainer>
            <h1>Articles</h1>
        </HeaderContainer>
            <WorkDisplayedSectionOne>
            <WorkItems> 
                <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            <WorkItems> 
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            <WorkItems>      
                <Overlay>
                <Image src={ImgOne} />
                    <OverlayText>Mer information som du vill ha</OverlayText>
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </Overlay></WorkItems>
            <WorkItems>
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            </WorkDisplayedSectionOne>
        </PageContainer>
        <WorkDisplayedSectionTwo>
            <WorkItems>
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
            </WorkItems>
        <WorkItems>
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
            </WorkItems>
        <WorkItems>
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems>
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems>
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems>
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems>
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems>
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems>
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        </WorkDisplayedSectionTwo>
    </TopSectionContainer>
    )
}