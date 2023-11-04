import { Image } from "next/image";
import { ClientButton } from "../components/clientbutton";

import axios from "axios";

export default function Home() {
    
    const userMessage = {
        role: "user",
        imgcontent: "rainbow fox"
    };
    
    async function replicateCall() {
        const replicateResponse = await axios.post("http://localhost:3000/api/replicate", userMessage);
        return replicateResponse;
    };
    
    const img = replicateCall();
    
    console.log("IMAGE RECEIVED");
    console.log(img);
    //console.log(img["data"]);
    //console.log(img);
    return (
        <div>
            <p>Hi</p>
                <ClientButton></ClientButton>
            <p></p>
        </div>
    );
};
