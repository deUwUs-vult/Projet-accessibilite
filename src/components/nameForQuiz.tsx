import React from "react";
import { IonIcon } from "@ionic/react";
import { logoIonic } from "ionicons/icons";
import { ArrowUndo } from "react-ionicons";
import Link from "next/link";

type Props = {
  name: string;
  sectionId: number;
};

export default function NameForQuiz(props: Props) {
return (
    <div className="bg-[#383F51] w-screen h-screen flex flex-col">
        <div className="flex flex-col self-center  justify-center w-1/2 h-full">
            <a className="flex " href="/">
                <ArrowUndo color={"#FFFFFF"} height="20px" width="20px" />{" "}
                 Retour au résumé
            </a>
            <h1 className="text-white w-fit text-4xl font-bold">
                Quel est le nom du {props.name == "qcm" ? props.name.toUpperCase() : (props.name.charAt(0).toUpperCase() + props.name.slice(1))} ?
            </h1>

            <input
                type="text"
                className="w-1/2 h-10  mt-5 p-2 bg-transparent focus: outline-none"
                placeholder={`Entrez le nom du ${props.name == "qcm" ? props.name.toUpperCase() : props.name}`}
            />
            <Link
                href={"#section-" + (props.sectionId + 1)}
                className="mt-5 bg-[#FFFFFF] self-end py-2 text-black w-fit px-2 h-10 rounded-lg transition duration-300"
                type="button"
            >
                Suivant
            </Link>
        </div>
    </div>
);
}
