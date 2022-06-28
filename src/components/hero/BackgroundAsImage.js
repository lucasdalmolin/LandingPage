import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { Link } from "react-router-dom";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`
  }
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-red-300 bg-black opacity-0`;

const HeroContainer = tw.div`z-0 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-red-700 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-red-700 font-medium text-sm `;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-red-700 text-gray-200 font-bold rounded shadow transition duration-300 hocus:bg-gray-200 hocus:text-red-700 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

//Links de navegacion de la pagina
export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">
        About
      </NavLink>
      <NavLink href="#">
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
      <PrimaryLink tw="inline-block" href="/#">
        Contact Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <StyledHeader tw="bg-red-800 fixed h-20 w-screen z-20 p-8 shadow-xl" links={navLinks} />
      <br/>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Notification>Siempre en crecimiento...</Notification>
            <Heading>
              <span>Mejores practicas,<br/>
              excelentes resultados. </span>
              <br />
              <SlantedBackground>Request SA</SlantedBackground>
            </Heading>
            <PrimaryAction>
              <NavLink href="http://www.request.com.ar/">
                Solutions
              </NavLink>
            </PrimaryAction>
          </LeftColumn>
          {/* <RightColumn>
            
          </RightColumn> */}
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
