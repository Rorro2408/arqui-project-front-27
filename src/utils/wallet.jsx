import { API_PORT, API_URL } from "../../setupEnv";
import { getUserToken } from "./session";

export const GetUserWallet = async () => {
  try {
    const response = await fetch(`${API_URL}:${API_PORT}/wallets`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getUserToken()}`
      }
    });

    if (response.ok) {
      const data = await response.json()
      return data.userBalance
    }

    const errorData = await response.json();
    console.error('Error obteniendo el balance:', errorData.message);
    return false;

  } catch (err) {
    console.error('Error obteniendo el balance:', err)
    return false
  }
}

export const AddMoneyToBalance = async (amount) => {
  try {
    const response = await fetch(`${API_URL}:${API_PORT}/wallets`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getUserToken()}`
      },
      body: JSON.stringify({ amount })
    });

    if (response.ok) {
      console.log('Dinero añadido correctamente');
      return true
    } else {
      console.error('Error al añadir dinero');
      return false
    }

  } catch (err) {
    console.error('Error en la solicitud', err);
    return false
  }

} 