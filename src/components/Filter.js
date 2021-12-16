import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {useThemeContext} from "../context/ThemeContextProvider"
import {useRegionContext} from "../context/RegionContextProvider"
import {AiOutlineDown} from "react-icons/ai"
const FilterCotainer = styled.div`
    ${tw`
        md:w-52
        lg:w-64
        w-48
        relative
        md:pr-1
    `}
   
`

const SelectedItem = styled.div`{
    ${tw`
        bg-white
        text-sm
        md:text-lg
        lg:text-xl
        w-full
        py-3
        lg:py-5
        rounded-md
        text-gray-700
        pl-4
        pr-2 
        md:px-5
        flex
        items-center
        justify-between
        md:-mt-5
        cursor-pointer 
        hover:text-gray-300
    `}
    ${({ dark }) => dark && `
        background : hsl(209, 23%, 22%);
        color: hsl(0, 0%, 100%)
        `}
    
}`

const SelectingContainer = styled.ul`
    ${tw`
        flex
        flex-col
        w-full
        absolute
        top-12
        md:top-9
        lg:top-14
        rounded-md
        bg-yellow-300
        overflow-hidden
        transition
        duration-300
        z-50
    `}
    ${({ option }) => !option && `
        display:none
    `}
`

const SelectingItem = styled.li`
    ${tw`
        bg-white
        text-sm
        md:text-base
        lg:text-lg
        w-full
        py-2
        text-gray-700
        pl-4
        pr-2 
        md:px-5
        list-none
        cursor-pointer
        hover:bg-gray-300
        transition
        duration-300
    `}

`
const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

export const Filter = () => {
    const {dark} = useThemeContext()
    const [option, setOption] = useState(false)
    const {region, setRegion} = useRegionContext()
    const handelClickOption = (item) => {
        setRegion(item)
        setOption(false)
    }
     
    console.log(region)
    return (
        <FilterCotainer>
            <SelectedItem dark={dark} onClick={() => setOption(!option)}>
                {region !== "" ? <p>{region}</p> : <p>Filter By Region</p>}
               <AiOutlineDown className='w-7 h-4 md:w-10 md:h-6 '/>
            </SelectedItem>
            <SelectingContainer option={option}>
                {regionOptions.map((item,index) => (
                    <SelectingItem key = {index} onClick={() => handelClickOption(item)}>
                        {item}  
                    </SelectingItem>
                ))}
                <SelectingItem onClick={() => handelClickOption("")}>
                        All 
                    </SelectingItem>
            </SelectingContainer>
        </FilterCotainer>
    )
}
