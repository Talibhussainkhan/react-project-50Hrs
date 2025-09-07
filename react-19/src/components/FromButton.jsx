import { useFormStatus } from "react-dom";



const FromButton = () => {
    const { pending } = useFormStatus();
  
    return (
    <button type="submit" disabled={pending} className='bg-black text-white px-2 py-2'>
        { pending ? 'Submitting...' : 'Submit' }
    </button>
  )
}

export default FromButton