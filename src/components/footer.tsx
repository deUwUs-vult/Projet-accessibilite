import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-[#C8C8C8] flex flex-col items-center w-screen py-4 text-black">
      <p>
        Droit de copie © 2024 Deus Vult. Tous droits réservés.
        <br />
        Fait avec ❤️ par{" "}
        <a href="https://github.com/albanagisa" className="text-red-500">
          Alban Girardi{" "}
        </a>
        ,{" "}
        <a href="https://github.com/PommeDAPI7749" className="text-red-500">
          Mayeul Boeri
        </a>
        ,{" "}
        <a href="https://github.com/jahaa69" className="text-red-500">
          {" "}
          Bastien Exposito
        </a>
        ,{" "}
        <a href="https://github.com/dev-velris" className="text-red-500">
          Alexis Soubieux
        </a>{" "}
        et{" "}
        <a href="https://github.com/vardose" className="text-red-500">
          Axel Giraudon.
        </a>{" "}
      </p>
    </footer>
  );
}
