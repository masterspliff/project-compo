import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Nextgen from "../components/nextgen";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import FuturisticCard from '../components/cards';


const Home = () => {
  return (
    <>
      <Head>
        <title>Composhield - Armored Defensive Military Systems</title>
        <meta
          name="description"
          content="Composhield is a leading provider of armored defensive military systems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <FuturisticCard />

      <Nextgen />
      <SectionTitle
        pretitle="Composhield Advantages"
        title="Composite Shielding Technology">
        Composhield provides protection of people and equipment against blast, ballistic impact and other hostile actions. Protection can be offered against high and low calibre ballistic weapons as well as Improvised Explosive Devices (IEDs) and mine and blast threats.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Our Technology"
        title="Understanding Our Advanced Systems">
        We take pride in our advanced technology and innovative approach. Learn more about our state-of-the-art systems and how they can provide unmatched security and protection.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Trusted by Military Organizations Worldwide">
        Hear from our satisfied clients about how Composhield's advanced defensive systems have improved their security and peace of mind.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Have questions about our products or services? We have answers. Check out our FAQ section to learn more.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;