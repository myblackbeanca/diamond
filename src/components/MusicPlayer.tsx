import { useState } from 'react';

export default function MusicPlayer() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/k1.jpeg',
    '/k2.jpeg',
    '/k3.jpeg'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'diamondfive') {
      setIsUnlocked(true);
    }
  };

  return (
    <section id="unreleased" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Unreleased Exclusive on a MINY</h2>
          {!isUnlocked ? (
            <div className="space-y-8">
              <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden rounded-2xl">
                <img
                  src={images[currentImageIndex]}
                  alt={`Kevin Diamond performance ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => {
                    setTimeout(() => {
                      setCurrentImageIndex((prev) => (prev + 1) % images.length);
                    }, 3000);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password to unlock"
                  className="w-full px-4 py-2 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 mb-4"
                  aria-label="Password to unlock exclusive content"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
                >
                  Unlock Music
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="max-w-4xl mx-auto bg-black/50 rounded-2xl overflow-hidden">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1026519121?h=7a93b21b6d&color=a855f7&title=0&byline=0&portrait=0"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Kevin Diamond exclusive content"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}