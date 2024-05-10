import Image from 'next/image';
import logo from '../../public/logo.svg';
import pattern from '../../public/pattern.svg';

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-red ">
        <Image
          src={pattern}
          alt="Leandra Pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative flex min-h-screen flex-col gap-y-5 items-center text-blue justify-center z-10">
        <Image src={logo} alt="Leandra Logo" />
        <div className="uppercase flex flex-col text-xl text-center tracking-[.4em]">
          <h1>X</h1>
          <h1>Café</h1>
          <h1>Leopold</h1>
        </div>
      </div>
    </>
  );
}
