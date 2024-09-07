npm import React,{useState,useEffect} from "react";
const State=()=>{
const [count, setCount]=useState(0);
useEffect(()=>{
    alert("Hey i will render on count changed"); 
},[count])
function handleClick(){
    setCount(count+1);
}
function reset(){
   setCount(0);
}
return(
    <>
    <p>Count : {count}</p>
    <button onClick={handleClick}>Click me</button>
    <br/>
    <button onClick={reset}>Reset</button>
    </>
);
};
export default State;