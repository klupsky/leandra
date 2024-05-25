export default function Footer() {
  return (
    <div className="flex relative h-fit flex-col lg:flex-row text-white  bg-blue w-fill p-5 lg:p-10 gap-5 lg:gap-10 justify-between items-stretch">
      <div className="flex flex-col gap-2 flex-1 text-center lg:text-left self-center">
        <h4 className="uppercase flex flex-col text-xl tracking-[.4em]">
          Come as you are!
        </h4>
        <p className="uppercase flex flex-col text-sm tracking-[.2em]">
          Mon-Fri: 17:00-24:00
        </p>
      </div>

      <div className="bg-white w-full h-[2px] lg:h-auto lg:w-[2px]" />
      <a className="self-center" href="https://www.instagram.com/bar_leandra">
        <p className=" flex-1 uppercase text-center flex flex-col text-xl tracking-[.4em]">
          #leandra_bar
        </p>
      </a>
      <div className="bg-white w-full h-[2px] lg:h-auto lg:w-[2px]" />

      <div className="flex text-center lg:text-left self-center flex-col gap-2 flex-1">
        <h5 className="uppercase flex flex-col text-sm tracking-[.2em]">
          imprint
        </h5>
        <a href="mailto:info@leandra.at">
          <p className="uppercase underline lg:hover:no-underline transition-all ease-in-out duration-300 text-[.7rem] tracking-[.2em]">
            info@leandra.at
          </p>
        </a>
        <p className="text-[.7rem] tracking-[.2em]">
          Vogelfrei Gastronomie OG • Esterhazygasse 12 • 1060 Vienna • Austria •
          FN: 309299 Z Handelsgericht Wien • UID: ATU67730299
        </p>
      </div>
    </div>
  );
}
