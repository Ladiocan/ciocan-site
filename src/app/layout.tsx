"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { http } from "viem";
import { createPublicClient } from "viem";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css"; // 🔹 Importă stilurile RainbowKit

// Creează un QueryClient pentru react-query
const queryClient = new QueryClient();

// Configurăm publicClient-ul pentru Wagmi
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const wagmiConfig = createConfig({
  client: () => publicClient,
  chains: [mainnet],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>
            <Navbar />
            <main>{children}</main>
          </WagmiProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
