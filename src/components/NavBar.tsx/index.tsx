import React from "react"
import styled from "styled-components"
import tw from "twin.macro" 
import { Link } from "react-scroll"
import  { Logo } from "../Logo"
import { deviceSize } from "../Responsive"
import { useMediaQuery } from "react-responsive"
import { slide as Menu } from "react-burger-menu"
import styles from "./menuStyles"

const Container = styled.div`
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

const NavItems = styled.ul`
    ${tw`
        list-none
        w-full
        h-full
        flex
        justify-end
        items-end
        `
    };
`

const NavItem = styled.li`
    ${tw`
        font-family['Varela', sans-serif]
        lg:mr-8
        flex
        items-center
        justify-end
        min-h-full
        text-black
        cursor-pointer
        font-medium
        text-lg
        lg:text-base
        transition-colors
        transition-duration[300ms]
        hover:text-gray-200
        box-content
        mb-2
        lg:mb-0
      `
    };
`


export function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile})

    const navItems = (
        <NavItems>
            <NavItem>
                <Link to="About">About</Link>
            </NavItem>
            <NavItem>
            <Link to="Home">Articles</Link>
            </NavItem>
            </NavItems>
    )

    return (
        <Container>
          <Logo />
          {isMobile && (
            <Menu right styles={styles}>
              {navItems}
            </Menu>
          )}
          {!isMobile && navItems}
        </Container>
      );
    }