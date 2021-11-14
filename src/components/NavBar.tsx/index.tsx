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
width: 100%;
    ${tw`
        hidden
        h-20
        pl-6
        pr-6
        pt-4
        items-center
        self-center
        md:flex
        lg:flex
    `};
`

const NavItems = styled.ul`
    ${tw`
        list-none
        w-full
        h-full
        flex
        justify-around
        items-center
        `
    };
`

const NavItem = styled.li`
margin-left: 280px;
    ${tw`
        font-family['Varela', sans-serif]
        flex
        items-center
        justify-center
        text-black
        transition-colors
        transition-duration[300ms]
        hover:text-gray-200
      `
    };
`

export function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile})

    const navItems = (
        <NavItems>
          <NavItem>
              <h1>Articles</h1>
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