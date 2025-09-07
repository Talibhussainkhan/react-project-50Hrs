import { useActionState } from "react"

const increment = async (previousState, formData) => {
    console.log(formData.get('name'))
    return previousState + 1;
}

const UseActionHook = () => {
    const [state, formAction] = useActionState(increment, 0);
    
  return (
    <form>
        <h1 className="text-3xl">{ state }</h1>
        <button formAction={formAction} className="bg-teal-500 px-4 py-3 mt-2">Increment</button>
      <br />
      <input type="text" placeholder="Please enter a name" className="border-2 mt-3" name="name" />
    
    </form>
  )
}

export default UseActionHook