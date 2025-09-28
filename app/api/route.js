
import { NextResponse } from "next/server";
import { connectDB } from "../lib/configs/db";
import Todomodel from "../lib/models/Todomodel";


const LoadDB = async () =>{
    await connectDB();
}

LoadDB();


export async function  GET(request) {
    return NextResponse.json({msg:"get mehtod hit"})
    
}

export async function  POST(request) {
    const {title,description} = await request.json();
    await Todomodel.create({
        title,
        description,
    })

    return NextResponse.json({msg:"Todo Created"})
    
}