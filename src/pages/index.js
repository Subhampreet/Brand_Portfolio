import MenuButton from '@/components/MenuButton';
import Head from 'next/head';
import Header from '@/components/Header/Header';
export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
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
          <h5>
            The <b>HAMBRG</b>, is a creative, engineer driven, global agency
            working on advancing the software, advertising and design
            communities to new heights.
          </h5>
        </div>
      </div>
    </div>
  );
}
