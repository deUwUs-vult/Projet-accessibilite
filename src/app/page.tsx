"use client";
import Image from "next/image";
import Template from "@/components/templates";
import { useState, useEffect } from "react";
export default function Home() {
  const [templateList, setTemplateList] = useState<number[]>([]);

  useEffect(() => {
    fetch ("api/template", {method: "GET"})
  .then(async (res) => {
    
    setTemplateList([1,2,3]);
  });
  },[]);
  
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {templateList.map((id) => (
          <Template id={id} key={id}/>
        ))}
      </div>
  );
}
