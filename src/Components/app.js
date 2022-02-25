import React from "react";
import InputText from "./inputText";
import InputText from "./listedData";
import { logDOM } from "./logDom";
import picture from "./image";
import "/app css";
function app () {
    return (
    <main>
        <inputText/>
        <listedData/>
        <logDOM/>
        <picture src = "https://placekitten.com/200/300"/>
    </main>
    );
}
export default app

