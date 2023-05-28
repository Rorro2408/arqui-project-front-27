import { useEffect, useState } from "react";
import { GetUserRequests } from "../utils/requests";

export default function RequestIndex() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetUserRequests();
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
          </li>
        ))}
      </ul>
    </div>
  )
}
