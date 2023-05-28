import { Link } from "react-router-dom";
import { RegisterUser } from "../utils/session";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const succesfullRegister = await RegisterUser(event)
		if (succesfullRegister) {
			navigate('/login')
		} else {
			window.alert('El registro ha fallado. El correo ya fue utilizado por otra cuenta.')
		}
	};

	return (
		<section className="w-full rounded-lg shadow border bg-gray-800 border-gray-700">
			<div className="p-6 space-y-4">
				<h1 className="text-xl font-bold text-white">
					Registrarse
				</h1>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name" className="flex mb-1 text-sm font-medium text-white">Nombre</label>
						<input type="text" name="name" id="name" className="flex rounded-lg w-full p-2 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Juanito Pérez" required="" />
					</div>
					<div>
						<label htmlFor="email" className="flex mb-1 text-sm font-medium text-white">Correo electrónico</label>
						<input type="email" name="email" id="email" className="flex rounded-lg w-full p-2 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
					</div>
					<div>
						<label htmlFor="password" className="flex mb-1 text-sm font-medium text-white">Contraseña</label>
						<input type="password" name="password" id="password" placeholder="••••••••" className="flex rounded-lg w-full p-2 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
					</div>
					{/* <div>
						<label htmlFor="confirmPassword" className="flex mb-1 text-sm font-medium text-white">Confirmar Contraseña</label>
						<input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="flex rounded-lg w-full p-2 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
					</div> */}
					<button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"> Registrarse </button>
					<p className="text-sm font-light text-gray-400">
						¿Ya tienes una cuenta? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Inicia sesión aquí</Link>
					</p>
				</form>
			</div>
		</section>
	)
}