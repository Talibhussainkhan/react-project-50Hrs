import React from 'react'
import { useGetAllProductsQuery } from '../app/services/rtk-query'

const RtkQuery = () => {
    const { data, error, isLoading } = useGetAllProductsQuery()

    if( error ) {
        return <h1>Error occures</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    } 

  return (
    <div>
        { data?.products.map((data)=>(
            <h1 key={data.id}>{ data.title }</h1>
        )) }
    </div>
  )
}

export default RtkQuery