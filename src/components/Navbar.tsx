import Link from "next/link";
import ConnectButton from "./ConnectButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">Ladislau's Web3 Connection</h1>
      </Link>
      <ConnectButton /> {/* 🔹 Corectat, fără "Connect" în interior */}
    </nav>
  );
};

export default Navbar