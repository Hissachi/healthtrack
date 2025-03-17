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
      <main className="grid grid-cols-4 gap-[28px] row-start-2 items-center sm:items-start bg-white m-10 p-8 border-2 border-gray-200 rounded-2xl shadow-md">
        <form className="flex flex-col z-1 p-4 border-1 rounded-md border-indigo-200">
          <div className="flex justify-center font-bold border-1 rounded-md border-indigo-200">DADOS PESSOAIS</div>
          <div className="p-2"></div>
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
        <form className="flex flex-col z-1 p-4 border-1 rounded-md border-red-200">
          <div className="flex justify-center font-bold border-1 rounded-md border-red-200">ATIVIDADE</div>
          <div className="p-2"></div>
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
            <option value="intensidade-1">Leve</option>
            <option value="intensidade-2">Moderada</option>
            <option value="intensidade-3">Forte</option>
          </select>
          <input placeholder="Gasto Calórico (em kJ)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
        </form>
        <form className="flex flex-col z-1 p-4 border-1 rounded-md border-yellow-200">
          <div className="flex justify-center font-bold border-1 rounded-md border-yellow-200">ALIMENTAÇÃO</div>
          <div className="p-2"></div>
          <input placeholder="Número de refeições por dia" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <input placeholder="Consumo de água diário (ml)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="suplemento">
            <option defaultValue=""disabled selected>Utiliza algum suplemento?</option>
            <option value="suplemento-1">Sim</option>
            <option value="suplemento-2">Não</option>
          </select>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="nutricionista">
            <option defaultValue=""disabled selected>Frequenta nutricionista?</option>
            <option value="nutricionista-1">Sim</option>
            <option value="nutricionista-2">Não</option>
          </select>
          <input placeholder="Consumo Calórico (em kJ)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
        </form>
        <form className="flex flex-col z-1 p-4 border-1 rounded-md border-purple-200">
          <div className="flex justify-center font-bold border-1 rounded-md border-purple-200">SAÚDE GERAL</div>
          <div className="p-2"></div>
          <input placeholder="Tempo de sono diário (horas)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="sono">
            <option defaultValue=""disabled selected>Qualidade do sono</option>
            <option value="sono-1">Boa</option>
            <option value="sono-2">Moderada</option>
            <option value="sono-3">Ruim</option>
          </select>
          <input placeholder="Nível de estresse (1-10)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <input placeholder="Pressão arterial (mmHg)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
          <input placeholder="Frequência cardíaca (bpm)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"></input>
        </form>
        <div className="col-span-4 flex justify-center items-center">
          <button className="border-3 w-100 border-gray-400 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-700 hover:to-blue-700 transition ease-in-out duration-500 cursor-pointer shadow-md shadow-indigo-600 hover:shadow-black z-1" type="submit">
            Enviar
          </button>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="flex w-50 h-40 items-center justify-center bg-gray-200 rounded-md p-4 shadow-2xl">
          
        </div>
      </footer>
    </div>
  );
}
