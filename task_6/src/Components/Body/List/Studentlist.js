import React from "react";
import { Link } from "react-router-dom";
const Studentlist = (Props) =>{
    const list={
        width: "150px",
        border: "2px solid black",
        margin: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "2px",
        paddingRight: "2px"
    };
    return(
        <div>
        <div style={list}>
            <p>Name: {Props.name}</p>
            <p>ID: {Props.id}</p>
            <p>CGPA: {Props.cgpa}</p>
            <button><Link to={`/details/${Props.id}/${Props.name}/${Props.cgpa}`}>Details</Link></button>
        </div>
        </div>
    );
}
export default Studentlist;