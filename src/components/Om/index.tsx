import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import profile from "../../assets/profile.jpg";

const Container = styled.div`
width: 300px;
@media (min-width: 768px) {;
    width: 200px;
    margin-bottom: 0px;
          }
    @media (min-width: 1024px) {
    height: 800px;
    width: 400px;
    margin-bottom: 0px;
            }
    ${tw`
    flex 
    flex-col
    md:flex-row
    lg:flex-col
    justify-center
    items-center
        `
    };
`

const Image= styled.img`
    width: 100%;
    ${tw`
        font-family['Varela', sans-serif]
        font-black
        text-sm
        text-black
        `
    };
`

const Contact = styled.div`
    margin-top: 10px;
    line-height: 1,5em;
    ${tw`
        font-family['Varela', sans-serif]
        text-black
        `
    };

`
const Header = styled.h2`
    ${tw`
        font-family['Varela', sans-serif]
        font-semibold
        `
    };

`

const SocialMediaContainer = styled.h2`
    ${tw`
        font-family['Varela', sans-serif]
        font-semibold
        flex
        flex-row
        `
    };

`


export function Om() {
    return (
    <Container>
        <Image src={profile}/>
        <Contact>
            <p>Nulla aliquet eros sit amet enim imperdiet vehicula sed quis lacus. Duis lectus orci, molestie sed arcu et, semper porttitor odio. Suspendisse potenti. Cras nec pretium ante. Nulla dictum odio vulputate, aliquet mauris eget, rutrum mauris.</p>
            <Header>Kontakt</Header>
            <p>cornelia.mikaelsson@nosefornews.com</p>
            <p>999 99999</p>
            <SocialMediaContainer>
            <a href="https://www.instagram.com/corneliamikaelsson/">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"/>
            </a>
            <a href="https://www.instagram.com/corneliamikaelsson/">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"/>
            </a>
            <a href="https://www.linkedin.com/in/cornelia-mikaelsson-71674a99/">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/>
            </a>
            </SocialMediaContainer>
        </Contact>
    </Container>
    )
}