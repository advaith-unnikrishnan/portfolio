import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:"20px"}}>
          <HiOutlineCode size="4rem" />          
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technology" passHref>
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://blog.advaith.co" passHref>
          <NavLink>Blog</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/advaith-unnikrishnan">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/advaith_u">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/advaithu/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
