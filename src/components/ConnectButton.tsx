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
    <div>
      {isConnected ? (
        <div>
          <p>Connected: {address}</p>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            connect({ connector: injected() });
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
