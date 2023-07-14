import MenuButton from '@/components/MenuButton';
import Head from 'next/head';
import Header from '@/components/Header/Header';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
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
    </div>
  );
}
