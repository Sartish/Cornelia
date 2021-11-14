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

const TopSectionContainer = styled.div`
margin: 20px;
  ${tw`
  flex
  flex-col
  items-center
  justify-center
  w-screen
    `};
`;


const HeaderContainer = styled.div`
margin-top: 50px;
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
        w-screen
        `
    };
`


const AboutSection= styled.div`
    height: 900px;
    width: 300px;
    @media (min-width: 768px) {
    height: 750px;
    width: 440px;
    margin-right: 30px;
          }
    ${tw`
        `
    };
`


const WorkDisplayedSectionOne = styled.div`
margin-bottom: 30px;
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
  ${tw`
    grid
    grid-cols-1
    md:grid-cols-3
    lg:grid-cols-3
    gap-4
    items-center
    justify-center
    `};
`;


const WorkItems = styled.div`
height: 400px;
width: 300px;
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
background-image: linear-gradient(rgba(255,255,153, 0.8), rgba(255,255,153, 0.8));
cursor: pointer; 
  ${tw`
  opacity-0 
  hover:opacity-100 duration-500 
  absolute inset-0 z-10 
  flex justify-center 
  items-center 
  text-2xl 
  text-black 
  font-semibold
    `};
`;


const Description = styled.p`
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
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
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
            </WorkDisplayedSectionOne>
        </PageContainer>
        <WorkDisplayedSectionTwo>
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
        </WorkDisplayedSectionTwo>
    </TopSectionContainer>
    )
}