import React from 'react'
import Loader  from "react-loader-spinner";

const Loading = () => {
    return (
        <div className='h-96 w-full flex justify-center items-center'>
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    )
}

export default Loading
