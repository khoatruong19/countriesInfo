import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React,{useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useThemeContext } from '../context/ThemeContextProvider'
import {useGetCountryByNameQuery} from "../services/countriesApi"
import {useParams, useNavigate} from "react-router-dom"
import Loading from '../components/Loading'
import {BsArrowLeft} from "react-icons/bs"
import axios from "axios"
const Wrapper = styled.div`
    ${tw`
        lg:pb-56
        xl:pb-80
        w-full
        px-6
        xl:px-28
        lg:px-36
        py-5
        md:py-10
        bg-gray-100
        space-y-12
        md:space-y-16
        lg:space-y-20
        flex
        flex-col
        items-start
    `}
    ${({ dark }) => dark && `
    background : hsl(207, 26%, 17%);
    color: hsl(0, 0%, 100%)
    `}
`

const BackButton = styled.button`
    ${tw`
        text-base
        md:text-lg
        lg:text-xl
        w-24
        lg:w-36
        md:w-32
        py-1
        px-3
        md:py-2
        md:px-4
        lg:py-3
        lg:px-6
        bg-white
        rounded-md
        shadow-lg
        flex 
        items-center
        space-x-2
        sm:space-x-3
    `}
    ${({ dark }) => dark && `
        background : hsl(209, 23%, 22%);
        color: hsl(0, 0%, 100%)
        `};
`

const CountryInfoContainer = styled.div`
    ${tw`
        w-full
        h-full
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:space-x-36
        items-start
    `}
`

const CountryInfo = styled.div`
    ${tw`
        py-4
        md:py-5
        space-y-14
    `}
`

const InfoHeader = tw.span`
    font-semibold
    md:text-xl
    text-base
    w-40
    lg:w-52
    mr-1
    md:mr-3
`

const InfoContainer = tw.p`
    text-sm 
    md:text-base
    
`

const FlagImage = tw.img`
    w-full
    h-64
    xl:w-134
    xl:h-96
    lg:w-134
    lg:h-116
    md:w-120
    md:h-80
    shadow-lg
`

const BorderCountryButton = styled.p`
    ${tw`
        cursor-pointer 
        text-sm
        md:text-base
        bg-white
        px-3
        md:px-6
        lg:px-7
        py-1
        rounded-md
        shadow-lg
        mb-3
    `}
    ${({ dark }) => dark && `
    background : hsl(209, 23%, 22%);
    color: hsl(0, 0%, 100%)
    `};
`


const Detail = () => {
    const {dark} = useThemeContext()
    const {name} = useParams()
    const {data: country, isFetching} = useGetCountryByNameQuery(name)


    const navigate = useNavigate()
    console.log(country)
    
    const handelBorderCountry = (code) => {
        toast.info("Wait a second...")
        axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then(response => {
            let countryName = response.data[0].name.common
            navigate(`/country/${countryName}`)
        })
    }


    if(isFetching) return <Loading/>
    return (
        <Wrapper dark= {dark}>
            <BackButton dark= {dark} onClick={() => navigate("/")}>
                <BsArrowLeft className=' w- w-3 h-3 md:w-5 md:h-5'/>
                <p>Back</p>
            </BackButton>
            <CountryInfoContainer>
                <FlagImage src={country?.[0].flags?.png} alt='flag' />
                <CountryInfo>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>{country?.[0].name.common}</h1>
                    <div className='flex flex-col items-start space-y-5 lg:space-x-24 xl:flex-row xl:justify-between w-137'>
                        <div className='mb-3'>
                            <InfoContainer><InfoHeader>Official Name:</InfoHeader> {country?.[0].name.official}</InfoContainer>
                            <InfoContainer><InfoHeader>Population:</InfoHeader> {country?.[0].population}</InfoContainer>
                            <InfoContainer><InfoHeader>Region:</InfoHeader> {country?.[0].region}</InfoContainer>
                            <InfoContainer><InfoHeader>Sub Region:</InfoHeader> {country?.[0].subregion}</InfoContainer>
                            <InfoContainer><InfoHeader>Capital:</InfoHeader> {country?.[0].capital}</InfoContainer>
                        </div>
                        <div className=''>
                            <InfoContainer><InfoHeader>Top Level Domain:</InfoHeader>
                            {country?.[0].tld[0]}
                            </InfoContainer>
                            <InfoContainer><InfoHeader>Laguages:</InfoHeader> {Object.entries(country[0]?.languages).map(([key, value]) => (
                                    <span className='mr-3'>{value}</span>
                            ))}</InfoContainer>
                            <InfoContainer><InfoHeader>Currencies:</InfoHeader>
                            {Object.keys(country[0]?.currencies).map((obj) => (
                                    <span className='mr-3'>{obj}</span>
                            ))}</InfoContainer>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center '>
                        <InfoHeader>Border countries:</InfoHeader>
                        <div className='flex flex-wrap space-x-2 md:space-x-5 mt-2'>
                            {country?.[0].borders?.map((value,index) => (
                                <BorderCountryButton onClick={() => handelBorderCountry(value)} key ={index} dark={dark} >{value}</BorderCountryButton>
                            ))}
                        </div>
                    </div>
                </CountryInfo>
            </CountryInfoContainer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <ToastContainer />
        </Wrapper>
    )
}

export default Detail
