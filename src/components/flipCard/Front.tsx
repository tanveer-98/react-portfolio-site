import React from 'react'

const Front = ({children}:any) =>{
    return (
      <div className="mx-auto absolute inset-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-blue-500 to-blue-100 transition-all duration-100 delay-200 z-20 hover:opacity-0">
        {children}
      </div>
    );
  }

export default Front