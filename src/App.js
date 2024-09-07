import React, { useEffect } from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List"; 
import {Add} from "./Calc/Add";
import {Sub} from "./Calc/Sub";
import {Div} from "./Calc/Div";
import  {AB} from "./Calc/AB";
import  State  from "./Calc/State";
import Props from "./Calc/Props";

function App(){
    useEffect(()=>{
        alert("Hey I will run on every render");
    },[])
    return( 
    <>
    <Heading/>
    <Para/>
    <List/> 
    <h1>Muskan</h1>
    <ul>
        <li>Sum is {Add(40,2)}</li>
        <li>Div is {Div(60,3)}</li>
        <li>Sub is {Sub(100,50)}</li>
        <li>Formula is {AB(2,3)}</li>
    </ul>
    <State/>
    <Props firstName="Mus" lastName="kan"/>
    </>
 );
 }
 export default App;