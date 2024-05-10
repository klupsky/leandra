import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-red">
      <div className="">
        <Image
          className=""
          src="/leandra_logo.png"
          alt="Leandra Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
