import Carousel from "../components/Carousel"
import Layout from "../components/Layout"
import { useEffect, useState } from "react";
import { getUser } from "../utils/session";
import { Link } from "react-router-dom";

export default function Events() {
	const [user, setUser] = useState()

	useEffect(() => {
		const user = getUser()
		setUser(user)
	}, []);

	return (

		<Layout >
			<div className="w-full flex flex-col justify-center items-center">
					<Carousel />
				<div className="w-full flex-col items-center justify-center">
					{user && <div className="flex flex-col space-y-4 justify-center mt-10">
						<Link to='/events' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg mr-4 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Ver eventos  </Link>
						<Link to='/requests' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg mr-4 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Ver requests realizadas  </Link>

					</div>}
				</div>
			</div>
		</Layout>
	)
}