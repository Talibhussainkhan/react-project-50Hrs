import { useAddNewProductMutation } from "../app/services/rtk-query"


const AddNewProductByUsingRTK = () => {

    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation();
    
    const handleAddNewProduct = async () =>{
        try {

            const newProductData = {
                id : 1,
                title : 'Amazing T-shirt',
                description : 'bari achi t shirt' 
            }
            await addNewProduct(newProductData)
        } catch (error) {
            console.log('Error adding new products:', error)
        }
    }
    
    if( error ) {
        return <h1>Error occures</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    } 
    
  return (
    <div>
        <h1>{ data?.id }</h1>
        <h1>{ data?.title }</h1>
        <h1>{ data?.description }</h1>
        <button onClick={handleAddNewProduct} disabled={isLoading}>Add new Product</button>
    </div>
  )
}

export default AddNewProductByUsingRTK