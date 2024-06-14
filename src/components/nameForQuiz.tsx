import React from "react";
import Footer from "./footer";

export default function NameForQuiz() {
    return (
        <div className='bg-[#383F51] w-screen h-screen flex flex-col'>
            <div className="flex flex-col self-center items-center justify-center w-1/2 h-full">
                <h1 className="text-white text-4xl font-bold">What's the name of the Quiz ?</h1>
                <input type="text" className="w-1/2 h-10  mt-5 p-2 bg-transparent focus: outline-none" placeholder="Entrez le nom du quiz"/>
                <button className="mt-5 bg-[#FFFFFF] self-end text-black w-fit px-2 h-10 rounded-lg" type={"submit"}>Next</button>
            </div>
            <Footer></Footer>
        </div>
    );
}