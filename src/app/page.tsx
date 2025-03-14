import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-100 to-blue-200">
      <header className="row-start-1 flex gap-[24px] items-center justify-center">
        <div className="font-bold text-2xl">
          Healthtrack
        </div>
        <div>
          Monitoramento de Saúde
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-white m-10 p-8 border-2 border-gray-200 rounded-2xl shadow-md">
        <form className="flex flex-col">
          <input placeholder="Nome Completo" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"></input>
          <input placeholder="Idade" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="sexo">
            <option value="sexo-1">Homem</option>
            <option value="sexo-2">Mulher</option>
            <option value="sexo-3">Megazord</option>
            <option value="sexo-5">Pagodeiro</option>
            <option value="sexo-6">Helicóptero</option>
            <option value="sexo-7">Taxista</option>
          </select>
          <input placeholder="Altura (em cm)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <input placeholder="Peso (em g)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Enviar</button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
