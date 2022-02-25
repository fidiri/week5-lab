import React, {useState} from "react";
function InputText() {
    const [data, setData] = useState("");

    return (
        <>
        <div> 
         <input
            type="text"
            value= {data}
            onchange={(e) => setData(e.target.value)}
           />
        </br>
        {data}
        </>
    )
}
export default InputText;