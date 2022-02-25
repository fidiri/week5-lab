import React from "react";
function listedData() {
    const list = ['sbaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'];
return (
    <ul>
        {
            list.map(item) => {
                return (
                    <li>{item}</li>
                )
            })
        }
    </ul>
)
}
export default listedData;