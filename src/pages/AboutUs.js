import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light";

//Componente con navbar
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 `}`;

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

    const navLinks = [
      <NavLinks key={1}>
        <NavLink href="/about">
          About
        </NavLink>
        <NavLink href="/contact">
          Professional Services
        </NavLink>
        <NavLink href="#">
          Esker Solutions
        </NavLink>
        <NavLink href="#">
          Customers
        </NavLink>
        <NavLink href="#">
          Partners
        </NavLink>
        <NavLink href="#">
          Company
        </NavLink>
        
      </NavLinks>,
      <NavLinks key={2}>
        <PrimaryLink tw="inline-block bg-gradient-to-r from-red-700 to-red-500 hocus:to-red-900" href="/#">
          Contact Us
        </PrimaryLink>
      </NavLinks>
    ];

  return (
    <AnimationRevealPage disabled>
      <Container>
        <StyledHeader tw="bg-red-900 bg-gradient-to-r from-red-700 via-red-700 fixed h-20 w-screen z-20 p-10 shadow-xl" links={navLinks} />
        <br/>
        <Header />
        <MainFeature1
          subheading={<Subheading>About Treact</Subheading>}
          heading="We are a modern design agency."
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
