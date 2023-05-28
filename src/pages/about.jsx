import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout >
      <div className="w-full flex flex-column justify-center items-center">
        <div className="w-full mx-40">
          <AboutUs />
        </div>
      </div>
    </Layout>
  )
}