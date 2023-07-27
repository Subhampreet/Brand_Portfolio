import React from 'react'
import Header from '@/components/Header/Header'
import Marquee from 'react-fast-marquee'

function About() {
  return (
    <div className='AboutMe'>
      <Header />
      <div className='banner'>
        <div className='body'>
          <div className='top'>
            <p>With a passion for music, the stage and graphic design, <br /><span>I enjoy working with people who value aesthetics</span></p>
          </div>
          <div className='bottom'>
            <img src="./aboutbanner.png" />
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='body'>
          <div className='left'>
            <h5>I make websites and photos, and I do it well.</h5>
            <p>With a passion for music, the stage and graphic design, I enjoy working with people who value aesthetics, who understand the power of simplicity and who know that a good customer experience is paramount.<br /><br/>By keeping your identity at the heart of my approach, my goal is to find the simplest solution to meet your needs. <br /><br/>My clients call on me for my efficiency, versatility and ease of communication (and also because I make incredible cookies, the secret is to put a lot of semi-salted butter in them).</p>
            <Marquee className='techstack-tags' pauseOnHover>
              <div className='tag'>Next.JS</div>
              <div className='tag yellow'>JavaScript</div>
              <div className='tag green'>DotNet</div>
            </Marquee>
          </div>
          <div className='right'>
            <img src="./about_02.jpg" />
            <div className='bottom'>
              LET’S KNOW EACH OTHER <span>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About