import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mail@advaith.co">mail@advaith.co</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Doing cool things that matter</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/advaith-unnikrishnan" target={"_blank"}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/advaithu/" target={"_blank"}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/advaith_u" target={"_blank"}>
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/advaith_u" target={'_blank'}>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://blog.advaith.co/" target={"_blank"}>
            <SiHashnode size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
