"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "@wagmi/core/connectors/injected";
import { useState } from "react";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [loading, setLoading] = useState(false);

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
            setLoading(true);
            connect({ connector: new InjectedConnector() });
          }}
        >
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
