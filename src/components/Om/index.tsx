import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import profile from "../../assets/profile.jpg";

const Container = styled.div`
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

const Contact = styled.p`
    width: 300px;
    ${tw`
        font-family['Varela', sans-serif]
        font-black
        text-sm
        text-black
        `
    };

`
export function Om() {
    return (
    <Container>
        <Image src={profile}/>
        <Contact>
            <h2>Om</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet leo tincidunt, vulputate nulla a, molestie mi. Fusce ac tempus dolor. Duis cursus at justo nec consectetur. Nulla aliquet eros sit amet enim imperdiet vehicula sed quis lacus. Duis lectus orci, molestie sed arcu et, semper porttitor odio. Suspendisse potenti. Cras nec pretium ante. Nulla dictum odio vulputate, aliquet mauris eget, rutrum mauris.</p>
            <h2>Contact</h2>
            <p>cornelia.mikaelsson@nosefornews.com</p>
            <p>999 99999</p>
        </Contact>
    </Container>
    )
}