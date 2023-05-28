import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout >
      <div className="w-full flex flex-column justify-center items-center">
        <div className="w-full">
          <ContactUs />
        </div>
      </div>
    </Layout>
  )
}