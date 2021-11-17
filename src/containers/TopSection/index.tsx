import React, {useEffect} from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { Om } from "../../components/Om";
import { NavBar } from "../../components/NavBar.tsx";
import Aos from 'aos';
import 'aos/dist/aos.css';


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

const Wrapper = styled.div`
margin: 0px;
${tw`
flex
flex-col
items-center
justify-center
  `};
`;


const TopSectionContainer = styled.div`
min-width: 100vh;
  ${tw`
  flex
  flex-col
  items-center
  justify-center
    `};
`;


const HeaderContainer = styled.div`
  ${tw`
  flex-row
  justify-center
  flex
  md:hidden
  lg:hidden
    `};
`;

const PageContainer= styled.div`
border: black 2px solid;
    ${tw`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    auto-cols-max 
    items-center
    `
    };
`
const Header = styled.h1`
padding: 10px;
  ${tw`
  md:hidden
  lg:hidden
  text-black
    `};
`;


const AboutSection= styled.div`
    border: red solid 2px;
    height: 750px;
    width: 300px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
    height: 820px;
    width: 440px;
    margin-bottom: 0px;
    margin-left: 15px;
          }
    ${tw`
    md:row-span-2
    lg:row-span-2
        `
    };
`


const WorkDisplayedSectionOne = styled.div`
height: 100%;
  ${tw`
    grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-2
    border-solid
    gap-4
    items-center
    `};
`;

const WorkDisplayedSectionTwo = styled.div`
margin-top: 0px;
@media (min-width: 768px) {
    margin-top: 30px;
          }
  ${tw`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    items-center
    `};
`;


const WorkItems = styled.div`
border: red solid 2px;
height: 350px;
width: 300px;
margin-bottom: 0px;
@media (min-width: 768px) {
height: 350px;
width: 450px;
margin-bottom: 50px;
  }
  ${tw`
     flex
     relative
     items-center
     justify-center
    `};
`;

const Overlay = styled.div`
width: 300px;
height: 300px;
@media (min-width: 768px) {
    width: 400px;
    height: 350px;
      }
  ${tw`
    absolute
    `};
`;

const OverlayText = styled.p`
background-image: linear-gradient(rgba(237,237,237, 0.8), rgba(237,237,237, 0.8));
cursor: pointer; 
  ${tw`
  opacity-0 
  hover:opacity-100 duration-500 
  absolute inset-0 z-10 
  flex 
  justify-center 
  items-center 
  text-2xl 
  text-black 
  font-semibold
    `};
`;


const Description = styled.div`
  ${tw`
  text-black
    `};
`;

const Image= styled.img`
    width: 100%;
    height: 300px;
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
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
    <Wrapper>
    <TopSectionContainer>
        <NavBar/>
            <Header>Cornelia Mikaelsson</Header>
            <PageContainer>
            <AboutSection>
            <Om />
            </AboutSection>
            <HeaderContainer>
            <h1>Articles</h1>
            </HeaderContainer>
            <WorkItems data-aos="fade-up"> 
                <Overlay>
                <a href="https://www.w3schools.com">
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </a>
                </Overlay>
            </WorkItems>
            <WorkItems data-aos="fade-up" > 
            <Overlay>
                <Image src={ImgTwo} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            <WorkItems data-aos="fade-up" >      
                <Overlay>
                <Image src={ImgThree} />
                    <OverlayText>Mer information som du vill ha</OverlayText>
                    <Description>
                        <p>Stefan Löfven avgår</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </Overlay></WorkItems>
            <WorkItems data-aos="fade-up" >
            <Overlay>
                <Image src={ImgFour} /> 
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            <WorkItems data-aos="fade-up" >
            <Overlay>
                <Image src={ImgFive} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
            </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgSix} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
            </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgSeven} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                 <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan Löfven avgår</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        </PageContainer>
    </TopSectionContainer>
    </Wrapper>

    )
}