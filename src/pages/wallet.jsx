import Carousel from "../components/Carousel"
import Layout from "../components/Layout"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/session";
import WalletComponent from "../components/WalletComponent";


export default function Wallet() {
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
          <WalletComponent />
        </div>
      </div>
    </Layout>
  )
}