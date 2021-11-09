import React from "react"
import styled from "styled-components";
import tw from "twin.macro";

const ArticlesSectionContainer= styled.div`
width: 90%;
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `};
`

const SectionInfo= styled.p`
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
        text-black
    `};
`


const Title = styled.h1`
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `};
`

export function ArticlesSection() {
    return (
        <ArticlesSectionContainer>
            <Title>Articles </Title>
        <SectionInfo>
            about what you like writing
        </SectionInfo>
        </ArticlesSectionContainer>
    )
}