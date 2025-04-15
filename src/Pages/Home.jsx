import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/Layout/Navbar";
import Card from "../Components/UI/Card";
import Footer from "../Components/Layout/Footer";

function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <section className="flex flex-col gap-4 p-6 bg-[#151351]">
        <div className=" flex flex-col justify-center p-6 h-[200px] w-[700px] self-start">
          <h2 className="text-3xl text-white font-semibold">
            CANSADO DE VER SEUS <span className="text-[#8706d0]">DADOS</span>{" "}
            <br /> EM UM
            <span className="text-[#8706d0]"> CAOS</span> COMPLETO?
          </h2>
          <p className="text-white mt-4">
            Com <span className="text-[#8706d0]">sort()</span>, você pode trazer
            ordem ao caos.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6 h-[300px] w-[700px] self-center">
          <h2 className="text-white font-bold text-3xl">ARRAY SORT METHOD</h2>
          <p className="text-white mt-4 text-center">
            O método sort() é uma função usada para organizar os elementos de
            uma lista em ordem crescente. Ele modifica a lista original,
            colocando os itens na sequência desejada. Também permite ordenar em
            ordem decrescente ou com base em algum critério específico, se for
            configurado.
          </p>

          <button
            className="bg-purple-700 text-white px-4 py-3 m-5 rounded hover:bg-[#8706d0] text-xl w-[200px] 
          font-bold hover:cursor-pointer transition-all duration-300 transform hover:scale-105"
          >
            &lt;/&gt;
          </button>
        </div>
      </section>

      <section className="bg-[#120f38] flex justify-center items-center p-6 gap-4 h-96">
        <Link to="/Alphabetic">
          <Card title="ALPHABETIC" buttonText="Ver mais" />
        </Link>

        <Link to="/Numeric">
          <Card title="NUMERIC" buttonText="Ver mais" />
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
