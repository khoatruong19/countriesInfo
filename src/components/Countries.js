import React,{useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {useGetCountriesByRegionQuery} from "../services/countriesApi"
import {useRegionContext} from "../context/RegionContextProvider"
import { useThemeContext } from '../context/ThemeContextProvider'
import { useNavigate} from 'react-router-dom'
import millify from "millify";
import Loading from './Loading'

const CountriesContainer = styled.div`
    ${tw`
        mt-5
        w-full
        h-full
        flex
        flex-col
        justify-center
        items-center
        sm:grid
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        xl:gap-x-40
        md:gap-x-36
        lg:gap-x-16
        relative
    `}
`

const CountryCard = styled.div`
    ${tw`
        flex
        flex-col
        md:ml-0
        mb-7
        w-64
        md:w-72
        rounded-lg
        overflow-hidden
        cursor-pointer
        shadow-lg
    `}
    height:350px;
` 

const CountryInfo = styled.div`
    ${tw`
        pl-5
        md:pl-7
        bg-white
        flex-1
        pb-8
        space-x-5
    `}
   
    ${({ dark }) => dark && `
        background : hsl(209, 23%, 22%);
        color: hsl(0, 0%, 100%)
        `}
`

const InfoItem = tw.p`
    break-words
`

const InfoHeader = tw.span`
    font-semibold
`

const ShowMoreButton = styled.button`
    ${tw`
        p-3
        text-lg
        md:text-xl
        md:p-5
        text-primary
        hover:text-gray-300
        bg-white
        m-auto
        cursor-pointer
        rounded-lg
        hover:shadow-lg
    `}
    ${({ dark }) => dark && `
        background : hsl(209, 23%, 22%);
        color: hsl(0, 0%, 100%)
        `}
`


export const Countries = ({countryName}) => {
    const {region} = useRegionContext()
    const {dark} = useThemeContext()
    const {data: countries, isFetching} = useGetCountriesByRegionQuery(region)
    const [limit, setLimit] = useState(10)
    const navigate = useNavigate()
    const filteredCountries = countries?.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()))
    if(isFetching) return <Loading/>
    console.log(">>>Check Countries")
    return (
        <CountriesContainer>
            {filteredCountries.length > 0 ? (filteredCountries?.slice(0,limit).map((country, index) => (
                <CountryCard key={index} onClick={() => navigate(`/country/${country.name.common}`)}>
                        <img className=' transition ease-in duration-300  transform hover:scale-110 w- w-full max-h-40'  src={country.flags?.png} width={300} height={180}  alt="flag"/>
                    <CountryInfo dark={dark}>
                        <h1 className='text-lg h-12 md:text-xl lg:text-2xl font-bold mt-4 mb-3 pb-2'>{country.name.common}</h1>
                        <InfoItem>
                            <InfoHeader>Population</InfoHeader>: {millify(country.population)}
                        </InfoItem>
                        <InfoItem>
                            <InfoHeader>Region</InfoHeader>: {country.region}
                        </InfoItem>
                        <InfoItem>
                            <InfoHeader>Capital</InfoHeader>: {country.capital}
                        </InfoItem>
                    </CountryInfo>
                </CountryCard>
            ))) : <p className={`text-center text-xl mt-5 font-semibold ${dark && "text-white"} text-gray-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`}>No countries</p>}

            {limit + 10 < filteredCountries.length && 
                <ShowMoreButton dark={dark} onClick={() => setLimit(limit+10)}>
                    Show more
                </ShowMoreButton>
            }
            
        </CountriesContainer>
            

    )
}
