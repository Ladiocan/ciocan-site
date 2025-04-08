"use client";

import "../styles/globals.css";
import { WagmiProvider, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { http } from "viem";
import { createPublicClient } from "viem";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css"; 

const queryClient = new QueryClient();

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
      <head>
        <link rel="icon" href="/faviconL.ico" />
        <title>Ciocan Ladislau</title>
        <meta name="description" content="CV Ciocan Ladislau" />
      </head>
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

