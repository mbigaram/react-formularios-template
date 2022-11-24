import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 8vh;
    background-color: lightgrey;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 2rem;
    gap: 16px;
`

export const NavBar = styled.nav`
    background-color: lightgrey;
    width: 50%;
    
`
export const OptionsList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    :hover{
        background-color: #f7b158;
    }
    
`