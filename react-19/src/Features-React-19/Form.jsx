import { useState } from "react";
import FromButton from "../components/FromButton"

const Form = () => {
     const [data, setData] = useState(null)
    const myAction = async (formData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const data = {
            name : formData.get('name'),
            email : formData.get('email'),
            password : formData.get('password'),
        }
        setData(data);
    }

  return (
    <>
    <form className="m-2.5" action={myAction} >

      <label htmlFor="name" >Name</label>
      <input type="text" id='name' name='name' className='border mb-2' />
      <br />
     
      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' className='border mb-2' />
      <br />
     
      <label htmlFor="password">password</label>
      <input type="password" id='password' name='password' className='border mb-2' />
      <br />
        
         <FromButton />
     </form>
     { data && JSON.stringify(data) }
  </>
  )
}

export default Form


// Get Data by form action
// const Form = () => {

//     const formAction = (formData)=>{
//         const userData = {
//             name : formData.get('name'),
//             email : formData.get('email'),
//             passowrd : formData.get('password'),
//         }
//         console.log(userData)
//     }
//   return (
//     <form action={formAction}>

//      <label htmlFor="name">Name</label>
//      <input type="text" id='name' name='name' className='border mb-2' />
//      <br />
     
//      <label htmlFor="email">Email</label>
//      <input type="email" id='email' name='email' className='border mb-2' />
//      <br />
     
//      <label htmlFor="password">password</label>
//      <input type="password" id='password' name='password' className='border mb-2' />
//      <br />
        
//         <button className='bg-black text-white px-2 py-2'>Submit</button>
//     </form>
//   )
// }

// export default Form