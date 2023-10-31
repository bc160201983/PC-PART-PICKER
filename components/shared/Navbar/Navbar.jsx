import Link from "next/link";
import { GiProcessor } from "react-icons/gi";
import { BiGitCompare } from "react-icons/bi";
import { BsWrenchAdjustableCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="h-[74px] bg-[#11131D] text-white w-full">
        <div className="flex justify-between h-full items-center">
          <div className="font-bold w-2/3 text-lg ml-[90px]">PCPARTPICKER</div>
          <div className="w-4/12 flex justify-center items-center">
            <ul className="flex gap-4">
              <li>Log In</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#191B2A] text-white w-full">
        <div className="flex text-sm h-full items-center border-t border-l border-[#26293b]">
          <Link
            className="font-bold py-4 px-4 border-l border-[#26293b] flex justify-center items-center text-sm ml-[90px] hover:bg-[#26293b] hover:transition-all hover:ease-in-out"
            href={"#"}
          >
            <BsWrenchAdjustableCircle className="h-6 w-6 mr-2" />
            Builder
          </Link>

          <Link
            className="font-bold py-4 px-4 border-l border-[#26293b] flex justify-center items-center text-sm hover:bg-[#26293b] hover:transition-all hover:ease-in-out"
            href={"#"}
          >
            <GiProcessor className="h-6 w-6 mr-2" />
            Products
          </Link>
          <Link
            className="font-bold py-4 px-4 border-r border-l border-[#26293b] flex justify-center items-center text-sm hover:bg-[#26293b] hover:transition-all hover:ease-in-out"
            href={"#"}
          >
            <BiGitCompare className="h-6 w-6 mr-2" />
            Compare
          </Link>
          <div className="w-full flex justify-end items-center">
            <ul className="flex gap-4">
              <li>Log In</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
