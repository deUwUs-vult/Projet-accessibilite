"use client";
import React, { useEffect } from 'react';


export default function page({params}: {params: {id: string}}){
    
    useEffect(() =>{
        fetch(`/api/template/${params.id}`, {method: "GET"})
        .then(async (res) => {
            if (res.status != 200){
                window.location.assign("/404");
            }
    })},[]);

    return (
        <div>
            <h1>Template Page</h1>
            <p>Template ID: {params.id}</p>
        </div>
    );
}