import Link from "next/link";
import React from "react";
import { Checkbox } from "react-ionicons";

type Props = {
    sectionId: number;
    name: string;
    };

export default function AddQuestion(props: Props) {
  return (
    <div className="bg-[#383F51] w-screen h-screen flex flex-col">
        <div className="flex flex-col self-center  justify-center w-1/2 h-full">
            <h1 className="text-white w-fit text-4xl font-bold">Écrivez vôtre question : </h1>
            <input
                type="text"
                className="w-1/2 h-10  mt-5 p-2 bg-transparent focus: outline-none"
                placeholder="Écrivez vôtre question"
            />
            <div className="flex items-center mt-5 mb-4">
                <input id={`checkbox-${props.sectionId}-true`} name={`checkbox-${props.sectionId}`} type="radio" value="true" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>    
                <label htmlFor={`checkbox-${props.sectionId}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vrai</label>
                </div>
            <div className="flex items-center mb-4">
                <input id={`checkbox-${props.sectionId}-false`} name={`checkbox-${props.sectionId}`} type="radio" value="false" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>    
                <label htmlFor={`checkbox-${props.sectionId}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Faux</label>
            </div>
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