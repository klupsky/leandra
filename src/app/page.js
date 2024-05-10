import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-red">
      <div className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="Leandra Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
