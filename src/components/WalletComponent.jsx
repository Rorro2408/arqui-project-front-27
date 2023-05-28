import { useEffect, useState } from "react";
import { AddMoneyToBalance, GetUserWallet } from "../utils/wallet";

export default function WalletComponent() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetUserWallet();
        if (response) {
          setBalance(response.balance);
        } else {
          console.error("Error cargando el balance");
        }
      } catch (err) {
        console.error('Error cargando el balance')
      }
    }
    fetchData();
  }, []);

  const handleAddMoney = async (amount) => {
    const addedMoneySuccesfully = await AddMoneyToBalance(amount)
    if (addedMoneySuccesfully) {
      window.alert('Dinero añadido con éxito.')
      setBalance(balance + amount);
    } else {
      window.alert('La solicitud de dinero ha fallado.')
    }
  };


  return (
    <div className="flex flex-col items-center w-full mt-10">
      <article className="flex w-full max-w-lg items-center gap-4 rounded-t-lg border border-gray-100 bg-white p-6">
        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
        </span>
        <div>
          <p className="text-2xl font-medium text-gray-900">{balance}</p>
          <p className="text-sm text-gray-500">Balance total</p>
        </div>
      </article>
      <div className="flex flex-col justify-center items-center w-full">
        <button onClick={() => handleAddMoney(5000)} className="w-full max-w-lg text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm px-5  py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"> Añadir $5000 a la wallet </button>
        <button onClick={() => handleAddMoney(20000)} className="w-full max-w-lg text-white bg-blue-800 hover:bg-blue-700 font-medium rounded-b-lg  text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"> Añadir $20000 a la wallet </button>
      </div>

    </div>
  )
}
