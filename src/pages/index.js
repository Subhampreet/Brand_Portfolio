import MenuButton from '@/components/MenuButton';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Marquee from "react-fast-marquee";
import { useState, useRef } from 'react';
import { gsap } from 'gsap';



export default function Home() {

  const [play, setPlay] = useState(false);
  let head1 = useRef(null);  
  

  return (
    <div className="Home">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {/* <main className="mx-auto w-auto">       
          <MenuButton>Menu</MenuButton>
          <MenuButton>Contact</MenuButton>
          <MenuButton>PROJECTS</MenuButton>
          <MenuButton>About Me</MenuButton>
      </main> */}
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <h3>I'm subhampreet</h3>
            <div className="head-bar"></div>
            <p className="head-desc">available for freelance work</p>
          </div>
          <div className="mid">
            <p>
              {/* <span >I'm Freelance Web and</span> Product Developer Transforming{' '} */}
              I'm Freelance Web and Product Developer Transforming {' '}
              <img src="/headimg.png"></img> Code Into Art
            </p>
            {/*  */}
            <p></p>
          </div>
          <div className="bottom">
            <p>
             I help companies to design digital products and turn ideas into a
              functional and delightful experience. I’m focusing on working on
              interface and digital design – mainly building products, branding
              and websites.
            </p>
          </div>
          {/* <h5>
            The <b>HAMBRG</b>, is a creative, engineer driven, global agency
            working on advancing the software, advertising and design
            communities to new heights.
          </h5> */}
        </div>
      </div>
    </div>
  );
}
