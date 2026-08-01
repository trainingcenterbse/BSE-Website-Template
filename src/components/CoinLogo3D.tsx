import bseLogo from "@/assets/bse-logo.png";

/** 3D spinning coin minted from the society emblem */
const CoinLogo3D = ({ size = 260 }: { size?: number }) => {
  const depth = Math.max(10, Math.round(size * 0.055));
  const slabs = 14;

  return (
    <div
      className="coin-scene select-none"
      style={{ width: size, height: size, perspective: `${size * 4}px` }}
      aria-hidden="true"
    >
      <div className="coin-spinner">
        {/* coin thickness: stacked slabs between the two faces */}
        {Array.from({ length: slabs }).map((_, i) => (
          <div
            key={i}
            className="coin-edge"
            style={{ transform: `translateZ(${-depth / 2 + (depth * i) / (slabs - 1)}px)` }}
          />
        ))}

        <div className="coin-face" style={{ transform: `translateZ(${depth / 2}px)` }}>
          <img src={bseLogo} alt="" className="coin-emblem" draggable={false} />
        </div>
        <div className="coin-face" style={{ transform: `rotateY(180deg) translateZ(${depth / 2}px)` }}>
          <img src={bseLogo} alt="" className="coin-emblem" draggable={false} />
        </div>
      </div>
      <div className="coin-shadow" />

      <style>{`
        .coin-scene { position: relative; display: grid; place-items: center; }
        .coin-spinner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: coin-spin 10s linear infinite;
          filter: drop-shadow(0 22px 34px hsl(var(--primary) / 0.4));
        }
        .coin-face, .coin-edge {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          transform-style: preserve-3d;
        }
        .coin-face {
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 32% 28%, hsl(0 0% 100%), hsl(210 22% 88%) 46%, hsl(214 18% 74%) 74%, hsl(214 22% 62%) 100%);
          box-shadow:
            inset 0 0 0 ${Math.round(size * 0.028)}px hsl(214 60% 92%),
            inset 0 0 0 ${Math.round(size * 0.034)}px hsl(217 60% 55% / 0.5),
            inset 0 ${Math.round(size * 0.03)}px ${Math.round(size * 0.06)}px hsl(0 0% 100% / 0.8),
            inset 0 -${Math.round(size * 0.03)}px ${Math.round(size * 0.07)}px hsl(217 40% 40% / 0.35);
          backface-visibility: hidden;
        }
        .coin-emblem {
          width: 68%;
          height: 68%;
          object-fit: contain;
          filter: drop-shadow(0 1px 0 hsl(0 0% 100% / 0.9)) drop-shadow(0 -1px 1px hsl(217 60% 25% / 0.35));
        }
        .coin-edge {
          background: linear-gradient(90deg,
            hsl(214 25% 48%) 0%,
            hsl(214 22% 66%) 18%,
            hsl(210 20% 86%) 46%,
            hsl(214 22% 64%) 76%,
            hsl(214 28% 44%) 100%);
        }
        .coin-shadow {
          position: absolute;
          bottom: -7%;
          width: 55%;
          height: 8%;
          border-radius: 9999px;
          background: hsl(var(--primary) / 0.35);
          filter: blur(14px);
          animation: coin-shadow 10s ease-in-out infinite;
        }
        @keyframes coin-spin {
          from { transform: rotateX(-9deg) rotateY(0deg); }
          to { transform: rotateX(-9deg) rotateY(360deg); }
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
