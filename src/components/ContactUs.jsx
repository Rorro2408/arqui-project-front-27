export default function ContactUs() {
  return (
    <section className="bg-indigo-900 bg-opacity-5 rounded text-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide font-bold mb-2" htmlFor="name">
                  Nombre Completo
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Juan Pérez" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide font-bold mb-2" htmlFor="email">
                  Correo electrónico
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="juanperez@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide font-bold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="Escribe aquí tu mensaje..."></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}