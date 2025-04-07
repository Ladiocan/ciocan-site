"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useState, useEffect } from "react";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-3">
      {isConnected ? (
        <>
          <span className="text-sm text-cyan-300 font-mono">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={() => disconnect()}
            className="text-xs px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-md"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={() => connect({ connector: injected() })}
          className="futuristic-button px-3 py-1 text-xs whitespace-nowrap"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
