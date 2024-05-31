"use client";
import React, { useEffect } from 'react';

type Props = {
    id: number;
};

export default function Template(props: Props) {
    return (
        <div className="cursor-pointer m-4 bg-buttonBg text-center px-4 py-2 rounded" onClick={() => {window.location.assign(`/template/${props.id}`)}}>
        <p>Choose me : {props.id}</p>
    </div>
    );
}