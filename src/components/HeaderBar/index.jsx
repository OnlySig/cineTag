import styled from "styled-components"
import logo from "/imgs/Logo-cinetag-branco.png"
import { Link, useLocation } from "react-router-dom"
import AncorLink from "../AncorLink"

const NavContainer = styled.header `
    padding: 20px 20em;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavLogo = styled.img `
    height: 48px;
    width: 169px;
`
const NavAncorContainer = styled.ul `
    display: flex;
    gap: 20px;
`
const HeaderBar = () => {
    const { pathname } = useLocation()
    return(
        <>
            <NavContainer>
                <Link to='/'><NavLogo src={logo} alt="logo do cineTag"/></Link>
                <NavAncorContainer>
                    <AncorLink local={pathname === '/' ? true : false} url='/'>Home</AncorLink> 
                    <AncorLink local={pathname === '/favoritos' ? true : false} url="/favoritos">Favoritos</AncorLink>
                </NavAncorContainer>
            </NavContainer>
        </>
    )
}
export default HeaderBar