import { pacifico } from "@/app/font";

const NavBar = () => {
  return (
    <div className="max-w-[1288px] m-auto pb-8 px-6 md:px-10 xl:px-0">
      <div className=" rounded-full p-4">
        <p
          className={`${pacifico.className} text-center text-4xl animate-pulse`}
          data-aos="zoom-out-down"
          data-aos-delay="5300"
        >
          Explorar
        </p>
      </div>
    </div>
  );
};

export default NavBar;
