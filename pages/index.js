import dynamic from "next/dynamic";
import Header from "../components/header";
const Hero = dynamic(() => {
  return import("../components/hero");
});
import Seo from "../components/seo";
import Layout from "../components/layout";
const Fitur = dynamic(() => {
  return import("../components/fitur");
});
const Products = dynamic(() => {
  return import("../components/products");
});
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Seo />
      <Header />
      <Layout>
        <Hero />
        <Fitur />
        <Products />
      </Layout>
      <Footer />
    </>
  );
}
