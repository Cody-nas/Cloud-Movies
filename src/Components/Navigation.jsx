import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Navigation = ({ page, setPage, setGroup }) => {
  return (
    <div className="relative z-10">
      <div className="fixed bottom-5 left-5 flex items-center gap-x-2 text-2xl bg-yellow-500/50 rounded-full px-2">
        <span
          onClick={() => page > 1 && setPage(page - 1)} // Check to prevent going below page 1
          className="cursor-pointer"
        >
          <IoMdArrowDropleftCircle />
        </span>
        <p className="text-xl select-none ">{page}</p>
        <span
          onClick={() => setPage(page + 1)} // Increase the page number
          className="cursor-pointer"
        >
          <IoMdArrowDroprightCircle />
        </span>
      </div>
      <select className="fixed top-5 left-5 bg-gray-200/90 text-sm tracking-wide text-gray-700 uppercase rounded-md outline-none p-1 cursor-pointer hover:bg-gray-200">
        <option value="TopRated">Top Rated</option>
        <option value="Popular">Popular</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Discover">Discover</option>
      </select>
    </div>
  );
};

export default Navigation;
