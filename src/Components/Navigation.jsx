import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Navigation = () => {
  return (
    <div className="relative z-10">
      <div className="fixed bottom-5 left-5 flex items-center gap-x-2 text-2xl bg-yellow-500/50 rounded-full px-2">
        <span>
          <IoMdArrowDropleftCircle />
        </span>
        <p>1</p>
        <span>
          <IoMdArrowDroprightCircle />
        </span>
      </div>
      <select>
        <option value="TopRated">Top Rated</option>
        <option value="Popular">Popular</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Discover">Discover</option>
      </select>
    </div>
  );
};

export default Navigation;
