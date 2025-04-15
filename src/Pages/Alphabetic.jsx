import React, { useState } from "react";
import NavBar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

function Alphabetic() {
  const [resultado1, setResultado1] = useState(null);
  const [resultado2, setResultado2] = useState(null);
  const [resultado3, setResultado3] = useState(null);
  const [resultado4, setResultado4] = useState(null);

  function executarExemplo1() {
    const nomes = [
      "ash ketchum da cidade de pallet",
      "professor carvalho",
      "brock",
      "misty",
    ];
    nomes.reverse();
    setResultado1(nomes);
  }

  function executarExemplo2() {
    const amigos = ["pikachu", "zapdos", "ratatatatatatatatata", "arbok"];
    amigos.sort();
    amigos.reverse();
    setResultado2(amigos);
  }

  function executarExemplo3() {
    let inimigos = ["vegê", "isadora", "alex", "filipe", "lucas"];
    let inimigosOrdenados = inimigos.toSorted();
    setResultado3(inimigosOrdenados);
  }

  function executarExemplo4() {
    let strings = ["daniel", "ama", "jordan"];
    strings.sort();
    setResultado4(strings);
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#0a0a23] text-white">
      <NavBar />

      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full bg-[#1a1a3d] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
            Método <span className="text-white">Array.reverse()</span>
          </h2>

          <p className="mb-6 leading-relaxed">
            Assim como o <span className="text-purple-400">sort()</span>, o
            <span className="text-purple-400"> reverse()</span> sobrescreve o
            array original, apagando-o da memória. Ao contrário de sort(), não
            organiza os elementos do array em ordem alfabética ou decrescente:
            ele apenas{" "}
            <span className="text-purple-400">inverte os índices</span> dos
            elementos, colocando o primeiro valor no lugar do último, o segundo
            no lugar do penúltimo e assim por diante.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let nomes = ["ash ketchum da cidade de pallet", "professor carvalho", "brock", "misty"];
nomes.reverse();
console.log(nomes);
// >>> ["misty", "brock", "professor carvalho", "ash ketchum da cidade de pallet"]`}
          </pre>

          <button
            onClick={executarExemplo1}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md 
            hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Exemplo 1
          </button>

          {resultado1 && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: [{resultado1.join(", ")}]
            </p>
          )}

          <p className="mt-8 mb-4">
            O <span className="text-purple-400">reverse()</span> é excelente
            para utilizar em conjunto com{" "}
            <span className="text-purple-400">sort()</span> quando se deseja
            organizar strings alfabeticamente na ordem decrescente.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo combinado:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let amigos = ["pikachu", "zapdos", "ratatatatatatatatata", "arbok"];
amigos.sort();
console.log(amigos);
// >>> ["arbok", "pikachu", "ratatatatatatatatatatatata", "zapdos"]

// Revertendo a ordem:
amigos.reverse();
console.log(amigos);
// >>> ["zapdos", "ratatatatatatatata", "pikachu", "arbok"]`}
          </pre>

          <button
            onClick={executarExemplo2}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md
            hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Exemplo 2
          </button>

          {resultado2 && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: [{resultado2.join(", ")}]
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full bg-[#1a1a3d] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
            Método <span className="text-white">Array.tosorted()</span>
          </h2>

          <p className="mb-6 leading-relaxed">
            Esse método é idêntico ao{" "}
            <span className="text-purple-400">sort()</span>, com uma diferença
            bem relevante: esse método gera uma cópia do array original ao invés
            de sobrescrevê-lo, mantendo o original. É mais ou menos assim:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let inimigos = [“vegê”, “isadora”, “alex”, “filipe”, “lucas”]
let inimigosOrdernados = inimigos.toSorted()
console.log(inimigosOrdenados)
>>> [“alex”, “filipe”, “isadora”, “lucas”, “vegê”]
`}
          </pre>

          <button
            onClick={executarExemplo3}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md 
            hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Exemplo 1
          </button>

          {resultado3 && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: [{resultado3.join(", ")}]
            </p>
          )}

          <p className="mt-8 mb-4">
            O array original “inimigos” ainda existe na sua forma original.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full bg-[#1a1a3d] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
            Método <span className="text-white">Array.sort()</span>
          </h2>

          <p className="mb-6 leading-relaxed">
            O <span className="text-purple-400">sort()</span> ordena os
            elementos em ordem alfabética ou crescente. Porém, ele sobrescreve o
            array original, então o array original é alterado após o uso do
            método.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let strings = ["daniel", "ama", "jordan"];
strings.sort();
console.log(strings);
// >>> ["ama", "daniel", "jordan"]`}
          </pre>

          <button
            onClick={executarExemplo4}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md
            hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Exemplo 4
          </button>

          {resultado4 && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: [{resultado4.join(", ")}]
            </p>
          )}

          <p className="mt-8 mb-4">
            Lembrando que o <span className="text-purple-400">sort()</span> pode
            ter um comportamento inesperado ao tentar ordenar números. O método
            considera os números como strings, então se tentarmos ordenar
            números inteiros, o comportamento pode ser estranho.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Como ordenar corretamente números:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let inteiros = [40, 100, 2];
inteiros.sort(function(a, b){ return a - b });  // ordem crescente
console.log(inteiros);
// >>> [2, 40, 100]

inteiros.sort(function(a, b){ return b - a });  // ordem decrescente
console.log(inteiros);
// >>> [100, 40, 2]`}
          </pre>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Alphabetic;
