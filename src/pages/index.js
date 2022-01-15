import Acomplishments from "../components/Accomplishments/Accomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/Timeline/Timeline";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <title>Advaith | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Advaith U is a Web Developer, Community Evangelist and a tech speaker. He has prior experience working as a Google DSC Lead and Microsoft Student Ambassador."
        />
        <meta
          name="keywords"
          content="Advaith, Advaith U, Web Development, DSC Lead , Explore ML facilitator, Microsoft Student Ambassador, React Developer, Product Manager, Program Manager, Community evangelist in South India, Community Manager in South India, Tech Speaker"
        />
        <meta name="author" content="Advaith U" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        {/* <Acomplishments /> */}
      </Layout>
    </>
  );
};

export default Home;
