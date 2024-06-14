import Link from "next/link";
import React from "react";

type Props = {
    sectionId: number;
    name: string;
    };

export default function Describe(props: Props) {
  return (
    <div className="bg-[#383F51] w-screen h-screen flex flex-col">
        <div className="flex flex-col self-center  justify-center w-1/2 h-full">
        <h1 className="text-white w-fit text-4xl font-bold">Décrivez nous vôtre {props.name == "qcm" ? props.name.toUpperCase() : (props.name.charAt(0).toUpperCase() + props.name.slice(1))}</h1>
        <input
                type="text"
                className="w-1/2 h-10  mt-5 p-2 bg-transparent focus: outline-none"
                placeholder={`Décrivez vôtre ${props.name == "qcm" ? props.name.toUpperCase() : props.name}`}
            />
        <div className="flex flex-row-reverse self-end">
        <Link
                href={"#section-" + (props.sectionId + 1)}
                className="mt-5 bg-[#FFFFFF] self-end py-2 text-black w-fit px-2 h-10 rounded-lg transition duration-300"
                type="button"
            >
          Suivant
        </Link>
        <Link
                href={"#section-" + (props.sectionId - 1)}
                className="mt-5 bg-[#FFFFFF] self-end mr-2 py-2 text-black w-fit px-2 h-10 rounded-lg transition duration-300"
                type="button"
            >
          précédent
        </Link>
        </div>
        </div>
    </div>
  );
}