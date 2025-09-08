
import { useCounter } from '../store/store';
import Button from './Button';

const Counter = () => {
    const { count } =  useCounter();
  return (
    <div>
     <h1>{ count }</h1>
       <Button />
    </div>
  )
}

export default Counter