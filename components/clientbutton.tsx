"use client";

import { Button } from "./ui/button";

import axios from "axios";

type ClientButtonProps = {
    replicateResponse: string;
    setReplicateResponse: (replicateResponse: string) => void;
}

const ClientButton = ({ replicateResponse, setReplicateResponse }: ClientButtonProps) => {

    const buttonClick = async () => {
        const userMessage = {
            role: "user",
            content: "red elf",
        };
        const replicateRes = await axios.post("/api/replicate", userMessage);
        //const resJson = await replicateRes.json();
        console.log(replicateRes);
        setReplicateResponse(replicateRes['data']);
    }

    return (
        <div>
            <Button onClick={() => buttonClick()}>REPLICATE</Button>
        </div>
    )
};

export default ClientButton;