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
      <main className="grid grid-cols-2 gap-[32px] row-start-2 items-center sm:items-start bg-white m-10 p-8 border-2 border-gray-200 rounded-2xl shadow-md">
        <div className="absolute inset-0 pb-6.5 flex items-center justify-center opacity-5 font-light">|</div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 font-light z-0">|</div>
        <div className="absolute inset-0 pt-6.5 flex items-center justify-center opacity-15 font-light z-0">|</div>
        <div className="absolute inset-0 pt-13 flex items-center justify-center opacity-20 font-light z-0">|</div>
        <div className="absolute inset-0 pt-19.5 flex items-center justify-center opacity-25 font-light z-0">|</div>
        <div className="absolute inset-0 pt-26 flex items-center justify-center opacity-30 font-light z-0">|</div>
        <div className="absolute inset-0 pt-32.5 flex items-center justify-center opacity-35 font-light z-0">|</div>
        <div className="absolute inset-0 pt-39 flex items-center justify-center opacity-30 font-light z-0">|</div>
        <div className="absolute inset-0 pt-45.5 flex items-center justify-center opacity-25 font-light z-0">|</div>
        <div className="absolute inset-0 pt-52 flex items-center justify-center opacity-20 font-light z-0">|</div>
        <div className="absolute inset-0 pt-58.5 flex items-center justify-center opacity-15 font-light z-0">|</div>
        <div className="absolute inset-0 pt-65 flex items-center justify-center opacity-10 font-light z-0">|</div>
        <div className="absolute inset-0 pt-71.5 flex items-center justify-center opacity-5 font-light z-0">|</div>
        <form className="flex flex-col z-1">
          <div className="flex justify-center font-bold">DADOS PESSOAIS</div>
          <div className="flex justify-center pb-3 font-extralight transform opacity-20">------------------------------</div>
          <input placeholder="Nome Completo" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"></input>
          <input placeholder="Idade" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="sexo">
            <option defaultValue=""disabled selected>Selecione o sexo</option>
            <option value="sexo-1">Homem</option>
            <option value="sexo-2">Mulher</option>
            <option value="sexo-3">Megazord</option>
            <option value="sexo-4">Pagodeiro</option>
            <option value="sexo-5">Helicóptero</option>
            <option value="sexo-6">Taxista</option>
          </select>
          <input placeholder="Altura (em cm)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <input placeholder="Peso (em g)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
        </form>
        <form className="flex flex-col z-1">
          <div className="flex justify-center font-bold">DADOS DE ATIVIDADE</div>
          <div className="flex justify-center pb-3 font-extralight transform opacity-20">------------------------------</div>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="treino">
            <option defaultValue=""disabled selected>Selecione o treino</option>
            <option value="treino-1">HIIT</option>
            <option value="treino-2">Musculação</option>
            <option value="treino-3">Corrida</option>
            <option value="treino-4">Zumba</option>
            <option value="treino-5">Natação</option>
            <option value="treino-6">Hidroginástica</option>
          </select>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="frequencia">
            <option defaultValue=""disabled selected>Frequência do treino</option>
            <option value="frequencia-1">1 vez por semana</option>
            <option value="frequencia-2">2-3 vezes por semana</option>
            <option value="frequencia-3">4-5 vezes por semana</option>
            <option value="frequencia-4">6-7 vezes por semana</option>
          </select>
          <input placeholder="Duração (em minutos)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="intensidade">
            <option defaultValue=""disabled selected>Intensidade do treino</option>
            <option value="treino-1">Leve</option>
            <option value="treino-2">Moderada</option>
            <option value="treino-3">Forte</option>
          </select>
          <input placeholder="Gasto Calórico (em kJ)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
        </form>
        <div className="col-span-2 flex justify-center items-center">
          <button className="border-3 border-gray-400 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-700 hover:to-blue-700 transition ease-in-out duration-500 cursor-pointer shadow-md shadow-indigo-600 hover:shadow-black" type="submit">
            Enviar
          </button>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
