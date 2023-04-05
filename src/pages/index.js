import { Inter } from 'next/font/google'
import Header from '../../components/header'
import HeroSection from '../../components/heroSection'; 
import OurWork from "../../components/ourWork"; 
import DiscoverOur from "../../components/discoverOur"; 
import P from '../../components/p';
import OurSkill from '../../components/ourSkill';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className="font-sans">

      <Header></Header>
      <HeroSection></HeroSection>
      <OurWork></OurWork>
      <DiscoverOur></DiscoverOur>
<OurSkill></OurSkill>
      </section>
    </>
  );
}
