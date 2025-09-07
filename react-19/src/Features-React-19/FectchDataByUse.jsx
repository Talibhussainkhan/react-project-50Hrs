import { use } from "react";

const fetchData =  async ()=>{
    const res = await fetch('https://fakestoreapi.com/products/1');
    return res.json();
}

const FectchDataByUse = () => {

    const data = use(fetchData());

  return (
    <div>
        { data.map((item)=>(
            <h1>{ item.title }</h1>
        )) }
    </div>
  )
}

export default FectchDataByUse