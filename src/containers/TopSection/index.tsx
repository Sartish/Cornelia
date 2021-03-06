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
min-width: 100%;
  ${tw`
  flex
  flex-col
  items-center
  justify-center
    `};
`;


const HeaderContainer = styled.div`
margin-top: 20px;
margin-bottom: -10px;
text-align: center; 
font-size: 20px;
    @media (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 10px;
    text-align: center; 
    }
  ${tw`
  md:col-span-2
  lg:hidden
  font-family['Varela', sans-serif]
    `};
`;

const NavContainer = styled.div`
  ${tw`
  md:col-span-2
  md:row-span-1
  lg:col-span-3
  lg:row-span-1
    `};
`;


const PageContainer= styled.div`
    ${tw`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-1
    auto-cols-max 
    items-center
    `
    };
`
const Header = styled.h1`
padding: 10px;
font-size: 18px;
  ${tw`
  md:hidden
  lg:hidden
  text-black
    `};
`;


const AboutSection= styled.div`
    height: 650px;
    width: 300px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
    height: 350px;
    width: 600px;
    margin-bottom: 0px;
    display: flex; 
    justify-content: center; 
    align-items: center;
          }
    @media (min-width: 1024px) {
    height: 650px;
    width: 300px;
    margin-top: 20px;
    }

    ${tw`
    md:col-span-2
    md:row-span-2
    lg:row-span-2
    lg:col-span-1
        `
    };
`


const WorkItems = styled.div` 
height: 350px;
width: 300px;
margin-bottom: 0px;
    @media (min-width: 768px) {
    height: 250px;
    width: 300px;
    }
    @media (min-width: 1024px) {
    height: 300px;
    width: 300px;
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
    width: 300px;
    height: 200px;
      }
    @media (min-width: 1024px) {
    width: 300px;
    height: 250px;
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
width: 300px;
height: 300px;
@media (min-width: 768px) {
    width: 300px;
    height: 200px;
      }
    @media (min-width: 1024px) {
    width: 300px;
    height: 250px;
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
            <Header>Cornelia Mikaelsson</Header>
            <PageContainer>
            <NavContainer>
            <NavBar/>
            </NavContainer>
            <AboutSection>
            <Om />
            </AboutSection>
            <HeaderContainer>Artiklar</HeaderContainer>
            <WorkItems data-aos="fade-up"> 
                <Overlay>
                <a href="https://www.w3schools.com">
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
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
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            <WorkItems data-aos="fade-up" >      
                <Overlay>
                <Image src={ImgThree} />
                    <OverlayText>Mer information som du vill ha</OverlayText>
                    <Description>
                        <p>Stefan L??fven avg??r</p>
                        <p>2021.11.10 Sydsvenskan</p>
                    </Description>
                </Overlay></WorkItems>
            <WorkItems data-aos="fade-up" >
            <Overlay>
                <Image src={ImgFour} /> 
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
                </Overlay>
            </WorkItems>
            <WorkItems data-aos="fade-up" >
            <Overlay>
                <Image src={ImgFive} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
            </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgSix} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
            </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgSeven} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                <Image src={ImgNine} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
        <Overlay>
                 <Image src={ImgEleven} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        <WorkItems data-aos="fade-up">
            <Overlay>
                <Image src={ImgOne} />
                <OverlayText>Mer information som du vill ha</OverlayText>
                <Description>
                    <p>Stefan L??fven avg??r</p>
                    <p>2021.11.10 Sydsvenskan</p>
                </Description>
            </Overlay>
        </WorkItems>
        </PageContainer>
    </TopSectionContainer>
    </Wrapper>

    )
}