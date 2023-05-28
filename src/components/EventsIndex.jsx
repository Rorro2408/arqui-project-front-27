import { useEffect, useState } from "react";
import { GetEvents, GetEvent } from "../utils/events";
import { SendRequest } from "../utils/requests";
import PropTypes from 'prop-types';

EventsIndex.propTypes = {
  page: PropTypes.number,
};

export default function EventsIndex({ page = 1 }) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetEvents(page);
        if (response) {
          setEvents(() => [...response]);
        } else {
          console.error("Error cargando los eventos 1");
        }
      } catch (err) {
        console.error('Error cargando los eventos 2')
      }
    }

    fetchData()
  }, [page]);

  const handleObtainQuantity = async (event) => {
    event.preventDefault();
    const eventData = await GetEvent(event.target.event_id.value)
    if (eventData) {
      window.alert(`Cantidad disponible: ${eventData.quantity - eventData.occupiedQuantity}`)
    }
    else {
      window.alert('Hubo un fallo en obtener la cantidad disponible.')
    }
  }

  const handleSubmitRequest = async (event) => {
    event.preventDefault();
    const eventData = await GetEvent(event.target.event_id.value)
    const quantityAvailable = eventData.quantity - eventData.occupiedQuantity
    if (event.target.quantity.value > quantityAvailable) {
      window.alert(`La cantidad solicitada es mayor a la cantidad disponible. Cantidad disponible: ${quantityAvailable}`)
    }
    else {
      const succesfullRequest = await SendRequest({ event_id: event.target.event_id.value, quantity: event.target.quantity.value })
      if (succesfullRequest) {
        window.alert('Request realizada con éxito.')
      }
    }
  }


  return (
    <div className="container mx-4 my-16">
      <h1 className="text-3xl font-bold mb-8 flex justify-center">Eventos disponibles</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <li key={events.indexOf(event)} className="rounded-lg shadow-md bg-gray-900 p-4">
            <h2 className="text-xl font-bold mb-2 text-blue-500">{event.name}</h2>
            <p className="mb-2">${event.price}</p>
            <p className="mb-2">{event.location}</p>
            <p className="mb-2">Entradas totales: {event.quantity}</p>
            <form onSubmit={handleObtainQuantity}>
              <input type="hidden" name="event_id" value={event.event_id} />
              <button type="submit" className="w-full mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Solicitar cantidad disponible </button>
            </form>
            <p className="text-gray-600">{event.date}</p>
            <form onSubmit={handleSubmitRequest}>
              <div className="flex flex-col justify-center mt-5">
                <label className="flex mb-1 text-sm font-medium text-white ">Cantidad:</label>
                <input type="number" name="quantity" id="quantity" placeholder="1" defaultValue={1} className="flex rounded-lg w-full p-2 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                <input type="hidden" name="event_id" value={event.event_id} />
              </div>
              <button type="submit" className="w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Solicitar </button>
            </form>

          </li>
        ))}
      </ul>
    </div>
  );
}
