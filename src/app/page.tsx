"use client";
import Image from "next/image";
import Template from "@/components/templates";
import { useState, useEffect } from "react";
export default function Home() {
  const [templateName, setTemplateName] = useState<string[]>(["Quiz", "QCM", "Sondage"]);
  
  return (
      <div className="flex items-center justify-center min-w-screen min-h-screen">
        {templateName.map((id) => (
          <Template name={id} key={id}/>
        ))}
      </div>
  );
}
