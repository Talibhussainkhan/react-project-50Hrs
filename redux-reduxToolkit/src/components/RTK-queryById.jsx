import React from 'react'
import { useGetProductByIdQuery } from '../app/services/rtk-query'

const RTKQueryById = () => {
    const { data, isLoading, error } = useGetProductByIdQuery(4);


     if( error ) {
        return <h1>Error occures</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    } 

  return (
    <div>
        <h1>{data.title}</h1>
        <h1>{data.brand}</h1>
        <h1>{data.category}</h1>
    </div>
  )
}

export default RTKQueryById