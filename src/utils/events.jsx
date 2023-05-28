import { API_PORT, API_URL } from '../../setupEnv';

export const GetEvents = async (page = 1) => {

  try {
    const response = await fetch(`${API_URL}:${API_PORT}/events?count=25&page=${page}`, {
      method: 'GET'
    });

    if (response.ok) {
      const responseData = await response.json()
      const eventsData = responseData.events
      const events = eventsData.map((eventData) => {
        return {
          event_bd_id: eventData.id,
          topic: eventData.topic,
          name: eventData.name,
          price: eventData.price,
          location: eventData.location,
          date: eventData.date,
          latitude: eventData.latitude,
          longitude: eventData.longitude,
          quantity: eventData.quantity,
          event_id: eventData.event_id,
          created_at: eventData.created_at
        };
      });
      return events
    }
    const errorData = await response.json()
    console.error('Error en obtener los eventos: ', errorData.message)
    return false

  } catch (err) {
    console.error('Error en obtener los eventos:', err)
    return false
  }
}

export const GetEvent = async (event_id) => {

  try {
    const response = await fetch(`${API_URL}:${API_PORT}/events/${event_id}`, {
      method: 'GET'
    });

    if (response.ok) {
      const responseData = await response.json()
      const eventData = responseData.event
      return {
        event_bd_id: eventData.id,
        topic: eventData.topic,
        occupiedQuantity: eventData.occupiedQuantity,
        name: eventData.name,
        price: eventData.price,
        location: eventData.location,
        date: eventData.date,
        latitude: eventData.latitude,
        longitude: eventData.longitude,
        quantity: eventData.quantity,
        event_id: eventData.event_id,
        created_at: eventData.created_at,
      }
    }
    const errorData = await response.json()
    console.error('Error en obtener el evento: ', errorData.message);
    return false

  } catch (err) {
    console.error('Error en obtener el evento')
    return false
  }


}
