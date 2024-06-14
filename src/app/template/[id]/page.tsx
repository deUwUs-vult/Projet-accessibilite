"use client";
import React, { useEffect } from 'react';
import Footer from '@/components/footer';
import NameForQuiz from '@/components/nameForQuiz';


export default function page({params}: {params: {id: string}}){
    
    useEffect(() =>{
        fetch(`/api/template/${params.id}`, {method: "GET"})
        .then(async (res) => {
            if (res.status != 200){
                window.location.assign("/404");
            }
    })},[]);

    return (
        <div className='bg-[#383F51] w-screen h-screen flex'>
            <NameForQuiz></NameForQuiz>
            
        </div>
    );
}