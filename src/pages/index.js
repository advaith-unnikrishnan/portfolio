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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Primary Meta Tags */}
        <meta
          name="keywords"
          content="Advaith, Advaith U, Web Development, DSC Lead , Explore ML facilitator, Microsoft Student Ambassador, React Developer, Product Manager, Program Manager, Community evangelist in South India, Community Manager in South India, Tech Speaker, Friends of Figma, Friends of Figma India"
        />
        <meta name="author" content="Advaith U" />
        <title>Advaith U | Home</title>
        <meta name="title" content="Advaith U | Home" />
        <meta
          name="description"
          content="Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advaith.co/" />
        <meta property="og:title" content="Advaith U | Home" />
        <meta
          property="og:description"
          content="Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy."
        />
        <meta property="og:image" content="/advaith.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://advaith.co/" />
        <meta property="twitter:title" content="Advaith U | Home" />
        <meta
          property="twitter:description"
          content="Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy."
        />
        <meta property="twitter:image" content="/advaith.jpg" />
        <script src="https://app.embed.im/snow.js" defer></script>
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
