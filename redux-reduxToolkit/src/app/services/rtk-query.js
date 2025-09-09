import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath : 'products',
     baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints : (build) => ({
    // Get All Products
    getAllProducts : build.query({
        query : () =>'/products'
    }),

    getProductById : build.query({
      query : (id) => `/products/${id}`
    }),

    addNewProduct : build.mutation({
      query : (newProduct) => ({
        url : `/product/add`,
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : newProduct,
      })
     }),

     updateProduct : build.mutation({
        query : ({ id, updatedProduct }) =>({
          url : `/products/${id}`,
          method : 'PUT',
          headers : { "Content-Type" : "application/json" },
          body : updatedProduct
        })
      })

  })
})

// `use${GetAllProducts}Query`
// behind aise work hota react query main endpoints

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation } = productApi