import React, { useEffect, useState } from 'react'
import Cart from './cart';
const Products =()=> {
    let url='https://dummyjson.com/products'
    const [data,setdata]=useState([]);
    const[added,setadded]=useState([])
    
   async function fetchproducts(){
        try{
            const req=await fetch(url);
            const res=await req.json();
            setdata(res.products);
      
        }
        catch(error){
            console.log("there is an error", error)
        }
    }
    useEffect(()=>{
        fetchproducts();
    },[])
  function add(id){
    const slecteditem=data.find((item)=>item.id===id);
    if(slecteditem){
      const alreadyadded=added.find((item)=>item.id===id)
      if(alreadyadded){
        alert('Item Already added');
      }else{
      setadded([...added,slecteditem])
   }
   }
   else{
    console.log("error");
   }

   }

   
  return (
    
   <div className='flex flex-wrap'>
     { data.map((item,id)=>{
         return(
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4" key={item.id}>
            <div class="h-full text-center">
              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center  inline-block border-2 border-gray-200 bg-gray-100" src={item.thumbnail}/>
               <h1>{item.title}</h1>
              <p class="leading-relaxed">{item.description}</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
             <div>
             <button onClick={()=>add(id)
            
            } className='btn bg-lime-700 px-2 text-white'>Add to cart</button>
             </div>
            </div>
          </div>
         )

        })
    }
    
    
    <Cart addto={added}/>
   </div>
  )
}
export default Products;
