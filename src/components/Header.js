import React from "react";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button";
import { Flex } from "./styles/Flex.styled";
import { Image } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the Community your Fans Will Love</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              explicabo pariatur consectetur repellat consequuntur, ex odit,
              beatae mollitia eum architecto reprehenderit! Quas, nesciunt?
              Voluptates maxime molestiae nam eum fugiat debitis?
            </p>

            <Button bg='#ff0099' color="#fff" >
              Get Started for free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='hh'/>


        </Flex>
      </Container>
    </StyledHeader>
  );
}
