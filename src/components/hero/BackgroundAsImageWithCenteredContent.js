import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;
// background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80

// PRUEBA FONDO COLOR
// const Container = styled.div`
//   ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
//   bg-black;
// `;

// const Heading = styled.h1`
//   ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-snug -mt-24 sm:mt-0`}
//   span {
//     ${tw`inline-block mt-2`}
//   }
// `;
// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-100`;


// PRUEBA FONDO COLOR

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50 `;

const HeroContainer = tw.div`z-10 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow-lg transition duration-300 text-gray-100 
hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {

  //const rutaServidor = "/"; //Pruebas
  const rutaServidor = "/requestsa"; //produccion

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href={ rutaServidor + "/about" }>
          About
        </NavLink>
        <NavLink href={ rutaServidor + "/profservices" }>
          Professional Services
        </NavLink>
        <NavLink href={ rutaServidor + "/eskersol" }>
          Esker Solutions
        </NavLink>
        <NavLink href={ rutaServidor + "/customers" }>
          Customers
        </NavLink>
        <NavLink href={ rutaServidor + "/partners" }>
          Partners
        </NavLink>
        <NavLink href={ rutaServidor + "/company" }>
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
    <Container>
      <StyledHeader tw="bg-red-900 bg-gradient-to-r from-red-700 via-red-700 fixed h-20 w-screen z-20 p-10 shadow-xl" links={navLinks} />
      <br/>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Heading>
              REQUEST
              <br />
              Information Technology
          </Heading>
          <PrimaryAction tw="bg-gradient-to-r from-red-700 to-red-900 hocus:to-red-500 transition duration-300 ease-out hocus:ease-in">Abous Us</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
