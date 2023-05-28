import Carousel from "../components/Carousel"
import Layout from "../components/Layout"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/session";
import EventsIndex from "../components/EventsIndex";

export default function Events() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  useEffect(() => {
    const user = getUser()
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  function nextPage() {
    setPage(page + 1)
  }

  function prevPage() {
    setPage(page - 1)
  }

  return (

    <Layout >
      <div className="w-full flex flex-column justify-center items-center">
        <div className="w-full">
          <Carousel />
          <EventsIndex page={page} />
          <div className="flex flex-row justify-center space-x-8 mb-10">
            {(page > 1) && <button onClick={prevPage}> Anterior </button>}
            {<p className="text-xl"> {page} </p>}
            <button onClick={nextPage}> Siguiente </button>
          </div>
        </div>
      </div>
    </Layout >
  )
}