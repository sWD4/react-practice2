import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ChildComponent1 from "./components/ChildComponent1";
import ChildComponent2 from "./components/ChildComponent2";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {  BrowserRouter as Router,Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import ComponentOne from "./components/ComponentOne"
import ComponentTwo from "./components/ComponentTwo"
import MyState from "./context/data/myState";
import axios from "axios";

function App() {
  // const a = 10;
  // const name = "shubham sharma"
  // const greet= ()=>{
  //   alert("hello world");
  // }
  //if else conditional rendering
  // const isAuth = true;
  // if(isAuth){
  //   return <Login/>
  // }
  // else{
  //   return <Home/>
  // }
  // const Fruits = ['Apple','Banana','Mango'];
  // const myList = ['item1','item2','item3']
  // const skills = [
  //   { id: 1, skill: 'JavaScript' },
  //   { id: 2, skill: 'Python' },
  //   { id: 3, skill: 'Java' },
  //   { id: 4, skill: 'C' },
  //   { id: 5, skill: 'C++' },
  //   { id: 6, skill: 'C#' },
  //   { id: 7, skill: 'Html' },
  //   { id: 8, skill: 'Css' },
  //   { id: 9, skill: 'Bootstrap' },
  //   { id: 10, skill: 'Tailwind Css' },
  //   { id: 11, skill: 'Material ui' },
  //   { id: 12, skill: 'React Js' },
  //   { id: 13, skill: 'Next Js' },
  //   { id: 14, skill: 'Angular Js' },
  //   { id: 15, skill: 'Vue Js' },
  //   { id: 16, skill: 'React Native' },
  //   { id: 17, skill: 'Dart' },
  //   { id: 18, skill: 'Flutter' },
  //   { id: 19, skill: 'Github' },
  //   { id: 20, skill: 'Electron Js' },
  // ];
  //use state function
  // const[count,setCount] = useState(0);
  // const increment = ()=>{
  //   setCount(count+1)
  // }
  // const decrement = ()=>{
  //   count>0 && setCount(count-1)
  // }
  //useEffect function
  // const[count, setCount] = useState(0);
  // const[calculation,setCalculation] = useState(0);
  // const update = ()=>{
  //   setCount(count+1)
  // }
  // useEffect(()=>{
  //   setCalculation(()=>count * 2)
  // },[count])
  //useRef hook function
  // const [inputValue, setInputValue] = useState('')
  // const count = useRef(0)
  // //console.log(count)
  // useEffect(()=>{
  //   count.current = count.current + 1;
  // })
  //fetch api function to fetch data from api
  // const [products, setProducts] = useState([]);
  // //console.log(products)
  // const getProduct = async ()=>{
  //     const res = await fetch('https://myfirstapi-data.vercel.app')
  //     const productData = await res.json()
  //     //console.log(productData.products)
  //     setProducts(productData.products)
  // }
  // useEffect(() => {
  //   getProduct()
  // }, [])
  //fetch api by using axios method 2
  const [products, setproducts] = useState([])
  //axios method
  const getProduct = ()=>{
      axios.get('https://myfirstapi-data.vercel.app')
      .then((response)=>{setproducts(response.data.products)})
      .catch((error)=>{console.log(error)})
  }

useEffect(() => {
 getProduct()
}, [])

  return (
    <>
     {/* <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias debitis
        odio, beatae unde qui eligendi cumque reprehenderit minus consequuntur
        dolore!
      </p>  */}
      {/* ternary operator */}
      {/* {(a > 12) ? 'Greater':'smaller'}  */}
      
      {/* <Navbar/>
      <Button/> */}
      {/* ---------------------------------------------------- */}
      {/* props use */}
      {/* <ChildComponent1 name = {name}/>
      <ChildComponent2 greet = {greet}/> */}
      {/* --------------------------------------------------- */}
      {/* logical && operator example */}
      {/* <div>fruits</div> 
      {Fruits.length>0 && 
      <h2>you have {Fruits.length} fruits in store</h2>
      } */}
      {/* ------------------------------------------------------- */}
      {/* map function use */}
      {/* <ul>
        {myList.map((value,index)=>{
          return <li key={index}> {value} </li>
        })}
      </ul> */}
      {/* {skills.map((value,index)=>{
        console.log(value)
       
        return(
          <h1 key={index}>{value.id}. {value.skill}</h1>
        )
      })} */}
      
      {/* ---------------------------------------------------------------- */}
      {/* routes */}
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="/*" element={<NoPage/>}/>
        </Routes>
      </Router> */}
      {/* --------------------------------------------------------------------- */}
       {/* useState hooks */}
       {/* <div className=' flex space-x-3 justify-center items-center h-screen'>
            <div className="">
                <p className=' text-6xl font-bold text-center mb-5'>{count}</p>
                <button className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={decrement}>Decrement</button>
                <button className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={increment}>Increment</button>
            </div>
        </div> */}
        {/* useEffect hook */}
        {/* <div className='flex justify-center items-center h-screen'>
        <div className=' border-2 border-gray-200 p-3 rounded-xl shadow-md bg-gray-50'>
          <p className='text-center font-bold mb-2 text-3xl'>Count: {count}</p>
          <button onClick={update} className=' font-bold w-full rounded-lg mb-2 text-white bg-gray-400 px-20 py-1.5' >+</button>
          <p className='text-lg font-bold'>Calculation: {calculation}</p>
        </div>
      </div> */}
      {/* useContext hook */}
      {/* <MyState>
      <ComponentOne/>
      <ComponentTwo/>
      </MyState> */}
      {/* useRef hook */}
      {/* <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <h2>Render Count:{count.current}</h2> */}
     
     {/* ------------------------------------------fetch api method 1---------------------------------- */}
     {/* <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
       {products.map((item,index)=>{
        const{image,title,price,description}= item
        return(
          <div key={index} className="p-2 md:w-1/4 w-full">
          <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src={image} alt="" />
            <h2 className='text-xl text-black font-bold'>{title}</h2>
            <h2 className='text-xl text-black font-bold'>₹ {price}</h2>
            <h2 className='text-lg text-black mb-2'>{description}</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
              Add to card
              </button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
              Buy Now
              </button>
            </div>
          </div>
        </div>
        )
       })}
      </div>
    </div> */}
      {/* -----------------------------------fetch api by axios method 2------------------------------- */}
      <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
       {products.map((item,index)=>{
        const{image,title,price,description}= item
        return(
          <div key={index} className="p-2 md:w-1/4 w-full">
          <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src={image} alt="" />
            <h2 className='text-xl text-black font-bold'>{title}</h2>
            <h2 className='text-xl text-black font-bold'>₹ {price}</h2>
            <h2 className='text-lg text-black mb-2'>{description}</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
              Add to card
              </button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
              Buy Now
              </button>
            </div>
          </div>
        </div>
        )
       })}
      </div>
    </div>
    </>
  );
}

export default App;
