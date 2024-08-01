import { ConnectButton } from "@rainbow-me/rainbowkit";
export const CustomConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="mt-6 text-center w-full rounded-full bg-[#cc3cd9] py-3 text-white text-base md:text-lg  font-medium"
                  >
                    Connect wallet 
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="mt-6 text-center w-full rounded-full bg-[#d93c76] py-3 text-white text-base md:text-lg  font-medium"
                  >
                    Wrong network
                  </button>
                );
              }
              return <></>;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
