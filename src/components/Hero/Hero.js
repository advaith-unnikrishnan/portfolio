/* eslint-disable react/no-unescaped-entities */
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there <br />
        I'm Advaith
      </SectionTitle>

      <SectionText>
       Developer | Community Evangelist | Product Enthusiast
      </SectionText>
      <Button onClick={()=>window.location="https://peerlist.io/advaith"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
