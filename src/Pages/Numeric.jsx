import React, { useState } from "react";
import NavBar from "../Components/Layout/Navbar";

function Numeric() {
  const [minValue, setMinValue] = useState(null);
  const [limitedAverage, setLimitedAverage] = useState(null);
  const [maxValue, setMaxValue] = useState(null);
  const [minNote, setMinNote] = useState(null);

  function executarExemploMin() {
    const numeros = [5, 0, 7];
    const resultado = Math.min(...numeros);
    setMinValue(resultado);
  }

  function executarLimiteMaximo() {
    const notas = [12, 8, 10];
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    const notaFinal = Math.min(media, 10);
    setLimitedAverage(notaFinal);
  }

  function executarExemploMax() {
    const numeros = [-2, 3, -5, 0];
    const resultado = Math.max(...numeros);
    setMaxValue(resultado);
  }

  function executarLimiteMinimo() {
    const notas = [-3, 4, 5];
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    const notaFinal = Math.max(media, 0);
    setMinNote(notaFinal);
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#0a0a23] text-white">
      <NavBar />

      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full bg-[#1a1a3d] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
            Método <span className="text-white">Math.min()</span>
          </h2>

          <p className="mb-6 leading-relaxed">
            O método <span className="text-purple-400">min()</span> retorna o{" "}
            menor valor numérico entre os argumentos passados. Ele pode ser
            útil tanto para encontrar o menor número quanto para limitar valores
            máximos.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo simples:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let numeros = [5, 0, 7];
console.log(Math.min(...numeros));
// >>> 0`}
          </pre>

          <button
            onClick={executarExemploMin}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Exemplo min()
          </button>

          {minValue !== null && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: {minValue}
            </p>
          )}

          <p className="mt-8 mb-4">
            Podemos usar o <span className="text-purple-400">Math.min()</span>{" "}
            para garantir que a média de notas não ultrapasse o valor máximo permitido (10).
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo prático:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let notas = [12, 8, 10];
let media = (12 + 8 + 10) / 3;
let notaFinal = Math.min(media, 10);
console.log(notaFinal);
// >>> 10`}
          </pre>

          <button
            onClick={executarLimiteMaximo}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Limite Máximo
          </button>

          {limitedAverage !== null && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: {limitedAverage}
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-4xl w-full bg-[#1a1a3d] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
            Método <span className="text-white">Math.max()</span>
          </h2>

          <p className="mb-6 leading-relaxed">
            O método <span className="text-purple-400">max()</span> retorna o{" "}
            maior valor entre os números passados. Também pode ser usado para
            impedir que um valor fique abaixo de um limite mínimo, como zero.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo simples:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let numeros = [-2, 3, -5, 0];
console.log(Math.max(...numeros));
// >>> 3`}
          </pre>

          <button
            onClick={executarExemploMax}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Exemplo max()
          </button>

          {maxValue !== null && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: {maxValue}
            </p>
          )}

          <p className="mt-8 mb-4">
            Podemos usar <span className="text-purple-400">Math.max()</span> para garantir que notas negativas sejam ignoradas e que a nota mínima seja 0.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-300">
            Exemplo prático:
          </h3>
          <pre className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-md text-sm font-mono whitespace-pre-wrap mb-4">
            {`let notas = [-3, 4, 5];
let media = (−3 + 4 + 5) / 3;
let notaFinal = Math.max(media, 0);
console.log(notaFinal);
// >>> 2`}
          </pre>

          <button
            onClick={executarLimiteMinimo}
            className="mb-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-md hover:cursor-pointer duration-300 transform hover:scale-105"
          >
            Executar Limite Mínimo
          </button>

          {minNote !== null && (
            <p className="mt-2 bg-black bg-opacity-30 p-3 rounded text-sm font-mono">
              Resultado: {minNote}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Numeric;
