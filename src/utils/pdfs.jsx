import { API_PORT, API_URL } from '../../setupEnv';

export const SendPDFRequest = async (urlParams) => {

  try {
    const response = await fetch(`${API_URL}:${API_PORT}/boletas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(urlParams),
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    console.error('Error en el envío de la request de PDF:', errorData.message);
    window.alert(`${errorData.message}`)
    return false;

  } catch (err) {
    console.error('Error intentando enviar una request de PDF', err)
    return false
  }

};