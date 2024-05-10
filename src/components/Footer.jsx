export default function Footer() {
  return (
    <div className="flex relative h-fit flex-col lg:flex-row text-white  bg-blue w-fill p-5 lg:p-10 gap-5 lg:gap-10 justify-between items-center">
      <div className="flex flex-col gap-2 flex-1 ">
        <h4 className="uppercase flex flex-col text-xl tracking-[.4em]">
          Come as you are!
        </h4>
        <p className="uppercase flex flex-col text-sm tracking-[.2em]">
          Mon-Fri: 10:00-24:00
        </p>
      </div>

      <div className="bg-white h-auto flex-1 w-[2px]" />
      <a href="">
        <p className=" flex-1 uppercase text-center flex flex-col text-xl tracking-[.4em]">
          #leandra_bar
        </p>
      </a>
      <div className="flex flex-col gap-2 flex-1">
        <h5 className="uppercase flex flex-col text-sm tracking-[.2em]">
          imprint
        </h5>
        <a href="mailto:">
          <p className="uppercase underline lg:hover:no-underline transition-all ease-in-out duration-300 text-[.7rem] tracking-[.2em]">
            kontakt@leandrabar.at
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
