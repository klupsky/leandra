import Image from 'next/image';
import logo from './logo.svg';

export default function Home() {
  return (
    <main className="font-sans flex min-h-screen flex-col items-center bg-red">
      <div className="">
        COME AS YOU ARE
        <Image src={logo} className="App-logo" alt="logo" />
      </div>
    </main>
  );
}
