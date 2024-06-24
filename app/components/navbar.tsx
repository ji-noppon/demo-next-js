import { FaCartPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="h-[48px]"></div>
      <div className="bg-blue-700 w-full py-2 px-4 fixed top-0 text-white flex justify-between">
        <div>logo</div>
        <div><FaCartPlus color="white" size="2em" /></div>
      </div>
    </div>
  )
}
