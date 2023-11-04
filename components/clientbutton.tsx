import { Button } from "./ui/button";

import axios from "axios";

const ClientButton = () => {
    const buttonClick = async () => {
        const userMessage = {
            role: "user",
            content: "green rabbit",
        };
        const replicateResponse = await axios.post("/api/replicate", userMessage);
    }

    return (
        <div>
            <Button onClick={() => buttonClick()}>

            </Button>
        </div>
    )
}

export default ClientButton;