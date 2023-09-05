import React from 'react';
import Header from '@/components/Header/Header';
import Marquee from 'react-fast-marquee';

function About() {
  return (
    <div className="AboutMe">
      <Header />
      <div className="banner">
        <div className="body">
          <div className="top">
            <p>
              With a passion for music, the stage and graphic design, <br />
              <span>I enjoy working with people who value aesthetics</span>
            </p>
          </div>
          <div className="bottom">
            <img src="./aboutbanner.png" />
          </div>
        </div>
      </div>
      <div className="info_me">
        <div className="body">
          <div className="left">
            <h5>I make websites and photos, and I do it well.</h5>
            <p>
              With a passion for music, the stage and graphic design, I enjoy
              working with people who value aesthetics, who understand the power
              of simplicity and who know that a good customer experience is
              paramount.
              <br />
              <br />
              By keeping your identity at the heart of my approach, my goal is
              to find the simplest solution to meet your needs. <br />
              <br />
              My clients call on me for my efficiency, versatility and ease of
              communication (and also because I make incredible cookies, the
              secret is to put a lot of semi-salted butter in them).
            </p>

            {/* <Marquee className='techstack-tags' pauseOnHover>
              <div className='tag'>Next.JS</div>
              <div className='tag yellow'>JavaScript</div>
              <div className='tag green'>DotNet</div>
            </Marquee>
            <Marquee className='techstack-tags' pauseOnHover direction='right'>
              <div className='tag'>MONGODB</div>
              <div className='tag yellow'></div>
              <div className='tag green'>DotNet</div>
            </Marquee> */}
          </div>
          <div className="right">
            <div className="img_cont">
              <img src="./about_02.jpg" />
            </div>
            <div className="bottom">
              LET’S KNOW EACH OTHER <span>MORE</span>
            </div>
          </div>
        </div>
        <div className="language">
          <div className="lan-top">
            <div className="lan-top-left">
              <h3>DEVELOPING IN</h3>
            </div>
            {/* <div className='lan-top-right'>
            <p>I Develop product using the following ingredients</p>
          </div> */}
          </div>
          <div className="lan-bottom">
            <div className="mar-1">
              <Marquee speed={60}>
                <p>React</p>
                <p>Next JS</p>
                <p>JavaScript</p>
                <p>DotNet</p>
                <p>MONGODB</p>
                <p>Supabase</p>
                <p>Figma</p>
              </Marquee>
            </div>
            <div className="mar-2">
              <Marquee speed={120}>
                <p>React</p>
                <p>Next JS</p>
                <p>JavaScript</p>
                <p>DotNet</p>
                <p>MONGODB</p>
                <p>Supabase</p>
                <p>Figma</p>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="exp">
        <div className="body">
          <div className="exp-carousal">
            <div className="exp-item">
              <div className="duration">JAN, 2021 - JAN, 2023</div>
              <div className="role">FRONT-END DEVELOPER</div>
              <div className="desc">
                Developed cross-browser compliant UI of the Migration Tool using
                React JS, Built multiple visual elements of web applications
                translating the UI/UX Designs, Responsible for developing C#,
                Dot Net APIs & Functional case statements as per project
                requirement, Involved in developing Complex queries, views and
                Store Procedures using SQL in Microsoft SQL server, Responsible
                for Sync to Azure DevOps TFS Sync.
              </div>
            </div>
            <h3>EXPERIENCE</h3>
          </div>
        </div>
      </div>
      <div className='fun-fyi'>
        <div className='body'>
          <h3>THREE THINGS TO KNOW ABOUT ME</h3>
          <p className='fun-fyi-fact'>
            1 - Developed cross-browser compliant UI of the Migration Tool using React JS,
            Built multiple visual elements of web applications translating the UI/UX Designs
            <br /><br />
            2 - Responsible for developing C#, Dot Net APIs & Functional case statements as per project requirement
            <br /><br />
            3 - Involved in developing Complex queries, views and Store Procedures using SQL in Microsoft SQL server, Responsible for Sync to Azure DevOps (TFS Sync).

          </p>
          <div className='gif'>
          <img src="./jon-snow-game-of-thrones.gif" className='jon-gif' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
