import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"
import {BsSearch} from "react-icons/bs"
import { Filter } from './Filter'
import { useThemeContext } from '../context/ThemeContextProvider'

const SearchContainer = styled.div`
    ${tw`
        flex
        flex-col
        md:flex-row
        justify-start
        md: justify-between
        md:items-center
        h-auto
        w-full
        space-y-5
      
    `}
    
` 

const SearchInput = styled.div`
    ${tw`
        flex
        items-center
        space-x-2
        lg:space-x-7
        max-w-full
        xl:w-1/3
        md:w-1/2
        sm:w-5/12
        bg-blue-300
        py-3
        lg:py-5
        lg:pl-8
        pl-4
        bg-primary
        bg-white
        rounded-md
    `}
        ${({ dark }) => dark && `
        background : hsl(209, 23%, 22%);
        color: hsl(0, 0%, 100%)
        `};
        width:290px;

`

export const Searching = ({setCountryName}) => {
    const {dark} = useThemeContext()
   

    return (
        <SearchContainer>
            <SearchInput dark={dark} >
                <BsSearch className='md:w-5  md:h-5 lg:w-7 lg:h-7'/>
                <input onChange={(e) => setCountryName(e.target.value)} className=' w-full outline-none bg-transparent text-sm md:text-lg lg:text-xl' type="text" placeholder='Search for a country..'/>
            </SearchInput>
           <Filter/>
        </SearchContainer>
    )
}
