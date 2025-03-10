import Link from "next/link";
import ConnectButton from "./ConnectButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">Ciocan Web3</h1>
      </Link>
      <ConnectButton />
    </nav>
  );
};

export default Navbar;
