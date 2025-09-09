import React from 'react'
import {  useUpdateProductMutation } from '../app/services/rtk-query'

const UpdateUsingRTK = ({productId}) => {
   const [ updatedProduct, { data, error, isLoading } ] = useUpdateProductMutation();

   const handleUpdateProduct =  async()=>{
    const updatedProductData = {
        title : 'Title Updated ❤'
    };
    await updatedProduct({
        id: productId,
        updatedProduct : updatedProductData
    })

   }

    if( error ) {
        return <h1>Error occures</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
   
  return (
    <div>
        <h1>{ data?.title }</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateUsingRTK