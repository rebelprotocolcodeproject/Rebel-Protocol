import { http, createConfig } from "@wagmi/core";
import { mainnet, bscTestnet} from "@wagmi/core/chains";

export const config = createConfig({
  chains: [bscTestnet],
  transports: {
    // [mainnet.id]: http(),
    [bscTestnet.id]: http(),
  },
});
