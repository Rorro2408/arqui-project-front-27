import { API_PORT, API_URL } from '../../setupEnv';
import { getUserToken } from "../utils/session";

export const SendRequest = async ({ event_id, quantity }) => {
  const postData = {
    event_id: event_id,
    quantity: quantity
  }

  try {
    const response = await fetch(`${API_URL}:${API_PORT}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getUserToken()}`
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      return true;
    }

    const errorData = await response.json();
    console.error('Error en el envío de la request:', errorData.message);
    window.alert(`${errorData.message}`)
    return false;

  } catch (err) {
    console.error(' Error intentando enviar una request', err)
    return false
  }

};

export const GetUserRequests = async () => {
  try {
    const response = await fetch(`${API_URL}:${API_PORT}/requests`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getUserToken()}`
      }
    });

    if (response.ok) {
      const responseData = await response.json();
      const requestsData = responseData.userRequests
      const requests = requestsData.map((requestData) => {
        return {
          request_id: requestData.request_id,
          user_id: requestData.user_id,
          event_id: requestData.event_id,
          quantity: requestData.quantity,
          deposit_token: requestData.deposit_token,
          seller: requestData.seller,
          validated: requestData.validated,
          created_at: requestData.created_at,
        };
      });
      return requests;
    }

    const errorData = await response.json();
    console.error('Error en el envío de la request:', errorData.message);
    return false;

  } catch (err) {
    console.error(' Error intentando enviar una request', err)
    return false
  }
}
