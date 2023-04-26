import { Inter } from "next/font/google";
import Header from "../../components/header";
import HeroSection from "../../components/heroSection";
import OurWork from "../../components/ourWork";
import DiscoverOur from "../../components/discoverOur";
import P from "../../components/p";
import OurSkill from "../../components/ourSkill";
import TechnologySolution from "../../components/technologySolution";
import NoName from "../../components/noName";
import Testimonials from "../../components/testimonials";
import OurLatest from "../../components/ourLatest";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <section className="font-sans max-w-[1150px]">
        <Header></Header>
        <HeroSection></HeroSection>
        <OurWork></OurWork>
        <DiscoverOur></DiscoverOur>
        <OurSkill></OurSkill>
        <TechnologySolution></TechnologySolution>
      <NoName></NoName>
      <Testimonials></Testimonials>
      <OurLatest></OurLatest>
      <Footer></Footer>
      {/* <P></P> */}

      
      </section>
    </>
  );
}
