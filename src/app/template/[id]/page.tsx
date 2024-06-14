"use client";
import React, { useEffect } from 'react';
import Footer from '@/components/footer';
import NameForQuiz from '@/components/nameForQuiz';
import Link from 'next/link';
import AddQuestion from '@/components/addQuestion';
import Describe from '@/components/describe';


export default function page({params}: {params: {id: string}}){
    
    useEffect(() =>{
        fetch(`/api/template/${params.id}`, {method: "GET"})
        .then(async (res) => {
            if (res.status != 200){
                window.location.assign("/404");
            }
    })},[]);

    const addSections = () => {
        const sections = [];

        for (let i = 2; i <= 21; i++){
            sections.push(
                <section
                    className="grid place-content-center min-h-screen bg-[#383F51] text-white text-center text"
                    id={"section-" + i}
                >
                    <AddQuestion sectionId={i} name={params.id}></AddQuestion>
                </section>
            );
        }

        return sections;
    };

    return (
        <>
        <section className="grid place-content-center min-h-screen bg-[#383F51] text-white text-center text" id='section-0'>
          <NameForQuiz sectionId={0} name={params.id}>
          </NameForQuiz>
        </section>
        <section
            className="grid place-content-center min-h-screen bg-[#383F51] text-white text-center text"
            id="section-1"
        >
            <Describe sectionId={1} name={params.id}></Describe>
        </section>
      {addSections()}
        <form action="/api" method="post"></form>

    </>
    );
}