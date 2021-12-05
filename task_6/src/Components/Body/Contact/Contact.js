import React, { useState } from "react";
const Contact = () =>{
    const [number,setNumber]=useState('01515686281');
    const [address,setAddress]=useState('Bashundhara R/A, Block: C, Road: 10');
    return(
        <div>
            <h3>Contact Details</h3>
            <span><b>Address: </b>{address}</span>
            <p><b>Phone Number: </b>{number}</p>
            <button type="button" onClick={()=>setNumber('01754155460')}>ChangeNumber</button>
        </div>
    );
}
export default Contact;