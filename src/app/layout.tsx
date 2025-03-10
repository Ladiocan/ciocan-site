"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { http } from "viem"; // Corrected import for public transport
import { createPublicClient } from "viem";
import { ReactNode } from "react";
import "../styles/globals.css";

// ✅ Correct public client setup
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// ✅ Wagmi configuration
const wagmiConfig = createConfig({
  client: () => publicClient,
  chains: [mainnet],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </WagmiProvider>
  );
}
