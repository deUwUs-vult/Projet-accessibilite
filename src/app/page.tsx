"use client";
import Image from "next/image";
import Template from "@/components/templates";
import { useState, useEffect } from "react";
export default function Home() {
  const [templateList, setTemplateList] = useState<number[]>([]);
  const [templateName, setTemplateName] = useState<string[]>(["Quiz", "QCM", "Sondage"]);

  useEffect(() => {
    fetch ("api/template", {method: "GET"})
  .then(async (res) => {
    setTemplateList([1,2,3]);
  });
  },[]);
  
  return (
      <div className="flex items-center justify-center min-w-screen min-h-screen">
        {templateList.map((id, i) => (
          <Template id={id} name={templateName[i]} key={id}/>
        ))}
      </div>
  );
}
