import { createConfig, fallback, http } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum],
  connectors: [injected()],
  transports: {
    [mainnet.id]: fallback([http()]),
    [polygon.id]: fallback([http()]),
    [optimism.id]: fallback([http()]),
    [arbitrum.id]: fallback([http()]),
  },
  ssr: true,
})
