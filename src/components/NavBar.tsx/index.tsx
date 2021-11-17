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
margin-bottom: 0px;
@media (min-width: 768px) {;
  margin-bottom: 0px;
      }
@media (min-width: 1024px) {
  margin-bottom: -30px;
    }
    ${tw`
        hidden
        h-10
        pl-6
        pr-6
        pt-4
        items-center
        justify-between
        md:flex
        md:justify-center
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
        md:hidden
        lg:flex
        md:justify-center
        `
    };
`

const NavItem = styled.li`
width: 500px;
font-size: 18px;
    ${tw`
        font-family['Varela', sans-serif]
        flex
        items-center
        justify-center
        text-black
        transition-colors
        transition-duration[300ms]
        hover:text-gray-200
        md:hidden
        lg:flex
      `
    };
`

export function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile})
    const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet})

    const navItems = (
        <NavItems>
          <NavItem>
              Artiklar
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