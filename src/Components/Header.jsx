import logo from "../assets/logo.png"
const Header = () => {
  return (
    <>
      <div className="absolute bg-gradient-to-b from-black p-9">
        <img
          className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto"
          src={logo}
          alt="logo"
        />
      </div>
    </>
  );
};
export default Header;
