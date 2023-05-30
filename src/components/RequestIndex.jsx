import { useEffect, useState } from "react";
import { GetUserRequests } from "../utils/requests";
import { GetEvent } from "../utils/events";

import { getUser } from "../utils/session";
import { SendPDFRequest } from "../utils/pdfs";

export default function RequestIndex() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetUserRequests();
        console.log(response)
        if (response) {
          setRequests(() => [...response]);
        } else {
          console.error("Error cargando las requests");
        }
      } catch (err) {
        console.error('Error cargando las requests')
      }
    }
    fetchData();
  }, []);

  const handleGetUrlButton = async (request) => {
    const user = await JSON.parse(getUser())
    const eventData = await GetEvent(request.event_id)

    const urlParams = {
      user_email: user.email,
      event_name: eventData.name,
      event_date: eventData.date,
      event_id: request.event_id,
      quantity: request.quantity,
      request_id: request.request_id,
      validated: request.validated,
      group_id: 27,
      date: Date.now()
    }
    const response = await SendPDFRequest(urlParams)
    window.location.href = response.url

  }

  return (
    <div className="container mx-4 my-16">
      <h1 className="text-3xl font-bold mb-8 flex justify-center">Requests realizadas</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {requests.map((event) => (
          <li key={requests.indexOf(event)} className="rounded-lg shadow-md bg-gray-900 p-4">
            <h2 className=" font-bold mb-2 text-blue-100">Event ID: {event.event_id}</h2>
            <h2 className=" font-bold mb-2 text-blue-300">Request ID: {event.request_id}</h2>
            <h2 className=" font-bold mb-2 text-blue-500">Validated: {event.validated ? 'Validada' : 'No validada'}</h2>
            <p className="mb-2">Entradas solicitadas: {event.quantity}</p>
            {event.validated && <button onClick={() => handleGetUrlButton(event)}>Solicitar URL</button>}
          </li>
        ))}
      </ul>
    </div>
  )
}
