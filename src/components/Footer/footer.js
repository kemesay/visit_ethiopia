import React from "react";
// import HomeIcon from '@material-ui/icons/Home'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#443f3f", textAlign: "center", marginTop: "-50px" }}>
        {/* <HomeIcon style={{color:'#B0C6BB',width:'80px',height:'70px',marginBottom:'-20px'}}> </HomeIcon> */}
        <span style={{ color: "#078930" }}>Visit-</span>
        <span style={{ color: "#FCDD09" }}>Land</span>
        <span style={{ color: "#0F47AF" }}>-of-</span>
        <span style={{ color: "#DA121A" }}>Origin</span>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="https://www.ethioembassy.org.uk/visit-ethiopia">
              Mission
            </FooterLink>
            <FooterLink href="https://www.ethiopia-insight.com/2020/09/21/the-paradox-for-ethiopia-the-land-of-origins">
              Vision
            </FooterLink>
            <FooterLink href="https://visitethiopia.travel">
              Background
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="https://t.me/LandofOrigin_Chatbot">
              Telegram Chat-Bot
            </FooterLink>
            <FooterLink href="https://goo.gl/maps/PNocZqewnazYn2429">
              Visit Our Office
            </FooterLink>
            <FooterLink href="https://www.tourhq.com/ethiopia/addis-ababa-guides/120">
              Contact Tourguides
            </FooterLink>
            <FooterLink href="https://goo.gl/maps/PNocZqewnazYn2429">
              Find places
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://goo.gl/maps/PNocZqewnazYn2429">
              Direct call
            </FooterLink>
            <FooterLink href="https://t.me/tourismethiopia">
              Telegram Channel
            </FooterLink>
            <FooterLink href="https://www.facebook.com/Ethiopialandoforigins">
              Facebook
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/showcase/ethiopialandoforigins">
              LinkedIn
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/Ethiopialandoforigins">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/ethlandoforigins">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/landoforigins?lang=en">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/c/landoforigins">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
