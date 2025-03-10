"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useState, useEffect } from "react";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);

  // Evită problemele de hydration: componenta se randează doar pe client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evită erorile de hydration la refresh

  return (
    <div className="flex items-center space-x-3">
      {isConnected ? (
        <>
          <span className="text-sm text-gray-400">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={() => disconnect()}
            className="text-xs px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 transition-all duration-300"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={() => connect({ connector: injected() })}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectButton;