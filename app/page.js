"use client";

import React, { useState } from 'react';

import { Image } from "next/image";
import ClientButton from "../components/clientbutton";

export default function Home() {
    const [replicateResponse, setReplicateResponse] = useState('');

    return (
        <div>
            <p>Hi</p>
            <ClientButton replicateResponse={replicateResponse} setReplicateResponse={setReplicateResponse}/>
            <p>replicate: {replicateResponse}</p>
        </div>
    );
};
