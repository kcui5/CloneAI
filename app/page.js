"use client";

import React, { useState } from 'react';

import Image from "next/image";
import { Button } from "../components/ui/button";
import ClientButton from "../components/clientbutton";

export default function Home() {
    const [replicateResponse, setReplicateResponse] = useState(null);

    return (
        <div>
            <p>Hi</p>
            <ClientButton replicateResponse={replicateResponse} setReplicateResponse={setReplicateResponse}/>
            <button>HTML BUTTON</button>
            <Button>SHADCN BUTTON</Button>
            <p>replicate: {replicateResponse}</p>
            {/*
            {replicateResponse && <Image 
                src={replicateResponse}
                width={400}
                height={400}
                alt={"Replicate generated image"}
            />}
            */}
            <img src={replicateResponse} alt={"Replicate generated image"}></img>

        </div>
    );
};
