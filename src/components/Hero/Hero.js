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
      {/* <SectionTitle main center>
        Hi there <br />
        I'm Advaith
      </SectionTitle> */}

      <SectionText>
       Thanks for dropping in!! A new portfolio is in the works, if you want to get in touch with me or check my works for the time being Visit the Bento profile below
      </SectionText>
      <Button onClick={()=>window.location="https://bento.me/advaith"}>Bento</Button>
    </LeftSection>
  </Section>
);

export default Hero;
