export default function Subscription() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            MINY Exclusives Subscription
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Get unlimited access to exclusive content for just $4.99/month
          </p>
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✦</span>
                Exclusive mixtapes and unreleased tracks
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✦</span>
                Behind-the-scenes content
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✦</span>
                Early access to new releases
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✦</span>
                Member-only virtual events
              </li>
            </ul>
            <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}