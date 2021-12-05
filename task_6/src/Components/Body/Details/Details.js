import react from "react";
import { useParams } from "react-router";
import { useState } from "react";
const Details = () =>{
    const {id : did}=useParams();
    const {name : dname}=useParams();
    const {cgpa : dcgpa}=useParams();
    console.log(did);
    return(
        <div>
            <h1>{did}</h1>
            <h1>{dname}</h1>
            <h1>{dcgpa}</h1>
            <p>Hello</p>
        </div>
    );
}
export default Details;