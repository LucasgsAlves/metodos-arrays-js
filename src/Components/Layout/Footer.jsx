import React from "react";

function Footer() {
  return (
    <footer>
      <div className="text-white bg-[#060134] flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl">Participantes</h2>
        <ul className="flex flex-col justify-center  text-left gap-2 p-4 text-lg">
          <li>Lucas Gabriel Silva Alves</li>
          <li>Daniel Ferreira Alves </li>
          <li>Victor Gabriel Freire Duarte da Silva</li>
          <li>Filipe Carvalho Delfino</li>
          <li>Alex Freire Carnevale Capovilla</li>
          <li>Isadora de Castro Feitosa</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
