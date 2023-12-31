import { NextResponse } from "next/server";

import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
});

export async function POST(req: Request) {
    try {
        
        const body = await req.json();

        const output = await replicate.run(
            "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
            {
                input: {
                    prompt: body["content"],
                }
            }
        )
        
        //return new NextResponse("Hello from replicate post", {status: 200});
        return NextResponse.json(output);
        //return NextResponse.json(output);
    } catch(err) {
        console.log("REPLICATE API CALL ERROR");
        console.log(err);
        return NextResponse.json({error: 'My Internal Server Error'}, {status: 500})
    }
}