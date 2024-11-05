import { useState } from 'react';

export default function MinyDrop() {
  const [claimCount, setClaimCount] = useState(0);
  const maxClaims = 5;

  const handleClaim = () => {
    if (claimCount < maxClaims) {
      setClaimCount(prev => prev + 1);
    }
  };

  return (
    <section id="miny" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/40 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive MINY Drop
          </h2>
          <p className="text-purple-200 text-lg">
            Be one of the first 5 superfans to own this exclusive release
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[2rem] rotate-45 animate-pulse" />
            <div className="absolute inset-2 bg-black rounded-[1.8rem] rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/kalbum.jpeg"
                alt="MINY Exclusive"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Limited Edition Release
            </h3>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>✦ Behind-the-scenes content</li>
              <li>✦ Early release tracks</li>
              <li>✦ Direct fan-artist engagement</li>
              <li className="text-purple-400">
                Offer valid until December 31, 2024
              </li>
            </ul>
            <button
              onClick={handleClaim}
              disabled={claimCount >= maxClaims}
              className={`px-8 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105
                ${
                  claimCount >= maxClaims
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                }`}
            >
              {claimCount >= maxClaims ? 'Offer Claimed' : 'Claim MINY'}
            </button>
            {claimCount < maxClaims && (
              <p className="mt-2 text-purple-300">
                {maxClaims - claimCount} spots remaining
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}