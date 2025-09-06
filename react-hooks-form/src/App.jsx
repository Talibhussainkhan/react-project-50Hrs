import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {

  const { register, reset ,handleSubmit, formState: { errors ,isSubmitting } } = useForm();
  const [data, setData] = useState(null);
  
  // in this two method of error handling/form validiation, within input code

  const onSubmit = (data) => {
  setData(data);
  reset()
  }

  return (
      <>
    <form onSubmit={handleSubmit(onSubmit)}>
     
     <div style={{ margin : '0px 0px 20px 0px' }}>
     <input {...register("firstName" , { required: "FirstName is required" })} placeholder="First name" />
     {errors.firstName && <p style={{ color : 'red' }}>{ errors.firstName.message }</p>}
     </div>
     
     <div style={{ margin : '0px 0px 20px 0px' }}>
     <input {...register("lastName" , { required: true })} placeholder="Last Name" />
     {errors.lastName && <p style={{ color : 'red' }}>Please Fill the field</p>}
     </div>
     
     <div style={{ margin : '0px 0px 20px 0px' }}>
     <input {...register("email" , { 
      required: 'Email is Required', 
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: "Invalid email address"
      }
      })} placeholder="email" />
     {errors.email && <p style={{ color : 'red' }}>{ errors.email.message }</p>}
     </div>
     
     <div style={{ margin : '0px 0px 20px 0px' }}>
     <input {...register("age", { required: true })} placeholder="Age" />
      {errors.age && <p style={{ color : 'red' }}>Please Fill the field</p>}

     </div>
     
     <div style={{ margin : '0px 0px 20px 0px' }}>
     <input type="password" {...register("password", 
      { required: 'Password is required' ,
        minLength: {
      value: 5,
      message: "password must be at least 5 characters long"
    }
      })
      } placeholder="password" />
      {errors.password && <p style={{ color : 'red' }}>{ errors.password.message }</p>}
     </div>
      
      <button disabled={isSubmitting} type="sumbit">sumbit</button>
    </form>
    <p>{data && JSON.stringify(data)}</p>
    </>
  )
}

export default App