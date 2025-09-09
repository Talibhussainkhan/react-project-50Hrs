import AddNewProductByUsingRTK from "./components/AddNewProductByUsingRTK"
import Counter from "./components/Counter"
import RtkQuery from "./components/Rtk-query"
import RTKQueryById from "./components/RTK-queryById"
import UpdateUsingRTK from "./components/UpdateUsingRTK"




const App = () => {



  return (
    <>
     {/* <Counter />  */}
     {/* <RtkQuery /> */}
     {/* <RTKQueryById /> */}
     {/* <AddNewProductByUsingRTK /> */}
     <UpdateUsingRTK productId={4} />
    </>
  )
}

export default App