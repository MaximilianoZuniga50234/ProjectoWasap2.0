import { FcImageFile } from "react-icons/fc";
import { HiDotsVertical } from "react-icons/hi";

function NavBar() {
  return (
    <nav className="bg-slate-800 px-3 py-2 border-b-2 border-slate-500">
      <div className="flex">
        <FcImageFile className="text-6xl bg-white border-4 rounded-full relative" />
        <HiDotsVertical className="text-5xl text-white mt-2 ml-auto" />
      </div>
    </nav>
  );
}

export default NavBar;
