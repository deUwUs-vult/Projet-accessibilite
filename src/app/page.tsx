"use client";
import Image from "next/image";
import Template from "@/components/templates";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
export default function Home() {
  const [templateName, setTemplateName] = useState<string[]>([
    "quiz",
    "qcm",
    "sondage",
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-w-screen min-h-screen">
      <div className="flex flex-row">
        {templateName.map((id) => (
          <Template name={id} key={id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
