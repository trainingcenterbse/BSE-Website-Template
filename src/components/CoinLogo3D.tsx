import coinImg from "@/assets/bse-coin.png";

/** 3D spinning coin bearing the society emblem */
const CoinLogo3D = ({ size = 260 }: { size?: number }) => {
  return (
    <div
      className="coin-scene select-none"
      style={{ width: size, height: size, perspective: `${size * 4}px` }}
      aria-hidden="true"
    >
      <div className="coin-spinner">
        <img
          src={coinImg}
          alt=""
          width={1024}
          height={1024}
          className="coin-face"
          draggable={false}
        />
        <img
          src={coinImg}
          alt=""
          width={1024}
          height={1024}
          className="coin-face coin-face--back"
          draggable={false}
        />
      </div>
      <div className="coin-shadow" />

      <style>{`
        .coin-scene { position: relative; display: grid; place-items: center; }
        .coin-spinner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: coin-spin 9s linear infinite;
          filter: drop-shadow(0 18px 30px hsl(var(--primary) / 0.35));
        }
        .coin-face {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          backface-visibility: hidden;
        }
        .coin-face--back { transform: rotateY(180deg); }
        .coin-shadow {
          position: absolute;
          bottom: -6%;
          width: 55%;
          height: 8%;
          border-radius: 9999px;
          background: hsl(var(--primary) / 0.35);
          filter: blur(14px);
          animation: coin-shadow 9s ease-in-out infinite;
        }
        @keyframes coin-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes coin-shadow {
          0%, 100% { transform: scaleX(1); opacity: 0.5; }
          50% { transform: scaleX(0.4); opacity: 0.25; }
        }
        @media (prefers-reduced-motion: reduce) {
          .coin-spinner, .coin-shadow { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default CoinLogo3D;
