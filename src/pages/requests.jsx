import Carousel from "../components/Carousel"
import Layout from "../components/Layout"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/session";
import RequestIndex from "../components/RequestIndex";


export default function Requests() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = getUser()
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (

    <Layout >
      <div className="w-full flex flex-column justify-center items-center">
        <div className="w-full">
          <Carousel />
          <RequestIndex />
        </div>
      </div>
    </Layout>
  )
}