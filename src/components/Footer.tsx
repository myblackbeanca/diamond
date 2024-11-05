import { Instagram, Diamond } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kevin Diamond</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/3KJsfJlHZrbfmPELMsNte7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Spotify"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14.5c2.5-1 5.5-1 8 0" />
                  <path d="M6.5 12c3.5-1 7.5-1 11 0" />
                  <path d="M5 9.5c4.5-1 9.5-1 14 0" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://playerone.minyvinyl.com/kevinxdiamond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Electronic Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-900/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kevin Diamond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}