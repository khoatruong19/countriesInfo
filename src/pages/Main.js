import React,{useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Countries } from '../components/Countries'
import { Searching } from '../components/Searching'

const Wrapper = styled.div`
    ${tw`
        max-w-full
        min-h-screen
        py-5
        md:py-10
        bg-gray-100
        box-border
        px-2
        md:px-5
    `}
    ${({ dark }) => dark && `
    background : hsl(207, 26%, 17%);
    color: hsl(0, 0%, 100%)
    `}
`

export const Main = ({dark}) => {
    const [countryName,setCountryName] = useState("")
    return (
        <Wrapper dark={dark}>
           <Searching setCountryName={setCountryName}/>
           <Countries countryName={countryName}/>
        </Wrapper>
    )
}
