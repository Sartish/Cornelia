import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import profile from "../../assets/profile.jpg";

const Container = styled.div`
width: 300px;
    ${tw`
    flex 
    flex-wrap 
    content-center
    flex-col
        `
    };
`

const Image= styled.img`
    width: 300px;
    ${tw`
        font-family['Varela', sans-serif]
        font-black
        text-sm
        text-black
        `
    };
`

const Contact = styled.div`
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



export function Om() {
    return (
    <Container>
        <Image src={profile}/>
        <Contact>
            <Header>Om</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet leo tincidunt, vulputate nulla a, molestie mi. Fusce ac tempus dolor. Duis cursus at justo nec consectetur. Nulla aliquet eros sit amet enim imperdiet vehicula sed quis lacus. Duis lectus orci, molestie sed arcu et, semper porttitor odio. Suspendisse potenti. Cras nec pretium ante. Nulla dictum odio vulputate, aliquet mauris eget, rutrum mauris.</p>
            <Header>Contact</Header>
            <p>cornelia.mikaelsson@nosefornews.com</p>
            <p>999 99999</p>
        </Contact>
    </Container>
    )
}