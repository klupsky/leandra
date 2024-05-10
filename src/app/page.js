import Image from 'next/image';
import logo from './logo.svg';

export default function Home() {
  return (
    <main className="font-sans">
      <div className="relative flex min-h-screen flex-col gap-y-5 items-center text-blue bg-red justify-center">
        <Image src={logo} alt="Leandra Logo" />
        <div class="uppercase flex flex-col text-xl text-center tracking-[.4em]">
          <h1>X</h1>
          <h1>Café</h1>
          <h1>Leopold</h1>
        </div>
      </div>
    </main>
  );
}
