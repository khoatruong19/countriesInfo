import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {BsMoonFill} from "react-icons/bs"
import { useThemeContext } from '../context/ThemeContextProvider'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = styled.div`
    ${tw`
        w-full
        h-20
        px-4
        md:px-20
        flex
        items-center
        justify-between
        text-lightText
        bg-lightBg
    `}
    ${({ dark }) => dark && `
        background : hsl(209, 23%, 22%);
        color: hsl(0, 0%, 100%)
  `}
`

const HeaderSlogan = tw.p`
    text-base
    sm:text-2xl
    lg:text-3xl
    font-semibold
    cursor-pointer
`

const ThemeToggleContainer = styled.div`
    ${tw`
        max-w-md
        flex
        space-x-1
        sm:space-x-2
        items-center
        text-base
        sm:text-xl
        lg:text-2xl
        cursor-pointer
    `}
`


export const Header = () => {
    const {dark, setDark} = useThemeContext()
    const navigate = useNavigate()
    return <HeaderContainer dark={dark}>
            <HeaderSlogan onClick = {() =>navigate("/")}>
                Where in the world?
            </HeaderSlogan>
            <ThemeToggleContainer onClick={() => setDark(!dark)}>
                <BsMoonFill/>
                <p>{dark ? "Light mode" : "Dark mode"}</p>
            </ThemeToggleContainer>
        </HeaderContainer>
}
