import Marquee from 'react-fast-marquee';

export default function Component() {
  return (
    <div className="bg-blue text-white flex h-10 items-center overflow-hidden">
      <Marquee autoFill={true} speed={100}>
        <h1 className="uppercase text-xl tracking-[.4em] mr-10">
          cocktail season is on!
        </h1>
      </Marquee>
    </div>
  );
}
