import { useState } from "react";

function logDOM() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault;
        alert('username: ${username}, password: ${password}');
    }
    return(
        <form onsubmit={(e) => handleSubmit(e)}>
            <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <input
            type = "text"
            value ={password}
            onchange={(e) => setPassword(e.target.value)}
/>
<input className="tagSubmit" type="submit" />   
</form>
)
}
export default logDOM;