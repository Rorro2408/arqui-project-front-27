import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/session";
import RegisterForm from "../components/RegisterForm";
import Layout from "../components/Layout";

export default function Register() {
	const navigate = useNavigate()

	useEffect(() => {
		const user = getUser()
		if (user) {
			navigate("/");
		}
	}, [navigate]);
	
	return (
		<Layout>
			<div className="w-full flex flex-column justify-center items-center">
				<div className="w-full max-w-screen-sm my-28 mx-4">
					<RegisterForm />
				</div>
			</div>
		</Layout>
	)
}
