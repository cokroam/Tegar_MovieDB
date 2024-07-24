import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-row w-full justify-between py-5 px-10 font-semibold shadow-lg bg-[#17153B] text-white rounded-sm">
      <h2 className="">TheMovieDB</h2>
      <div className="flex flex-row gap-8 font-semibold ">
        <Link to={"/"}>Home</Link>
        <Link to={"/upcoming"}>Up Coming</Link>
        <Link to={"/trending"}>Trending</Link>
        <div onClick={handleLogout} className="cursor-pointer">Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
