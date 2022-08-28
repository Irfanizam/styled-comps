import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";

const JoinNowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  gap: 10px;
  margin-left: 10px;
  font-size: 20px;
  width: 206px;
  height: 75px;

  background: rgba(85, 85, 255, 0.81);
`;

const Container = styled.h1`
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex;
  height: 100%;
`;

const Navigation = styled.h2`
  position: absolute;
  top: -50px;
  right: -20px;
`;

const Unordered = styled.h3`
  list-style: none;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 20px;
`;

const Ordered = styled.h4`
  float: left;
  margin: 10px;
`;

const Md = styled.h5`
  font-size: 1.4rem;
  line-height: 1.5;
  margin: 1rem 0 0;
  margin-left: 10px;
  font-weight: bold;
`;

const Lg = styled.h6`
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
  margin-left: 10px;
`;

const Section = styled.p`
  background: rgb(255, 255, 255);
  padding: 20px;
  display: grid;
`;
const Title = styled.p`
  background: rgb(255, 255, 255);
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
`;

const Laptop = styled.image`
  background-color: rgb(255, 255, 255);
  grid-column-start: 3;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
`;

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Navigation>
          <Unordered>
            <Link href="/posts/home">
              <a>
                <Ordered>Home</Ordered>
              </a>
            </Link>
            <Link href="/posts/about">
              <a>
                <Ordered>About</Ordered>
              </a>
            </Link>
            <Link href="/posts/contact">
              <a>
                <Ordered>Contact</Ordered>
              </a>
            </Link>
            <Link href="/posts/gallery">
              <a>
                <Ordered>Gallery</Ordered>
              </a>
            </Link>
            <Link href="/posts/services">
              <a>
                <Ordered>Services</Ordered>
              </a>
            </Link>
          </Unordered>
        </Navigation>
      </Container>
      <Section>
        <Title>
          <Md>
            How to start your own business ! <br></br>
            Will you ready ?
          </Md>
          <Lg>
            WE help individuals or Organizations to start their <br></br>
            business or start-up by giving them in depth theory and practical
            sessions.
          </Lg>
          <JoinNowButton>Join Now</JoinNowButton>
        </Title>
        <Laptop>
          <Image
            priority
            src="/images/laptop.jpg"
            className={utilStyles.borderLaptop}
            height={500}
            width={500}
            alt={"/images/laptop.jpg"}
          />
        </Laptop>
      </Section>
    </Layout>
  );
}
