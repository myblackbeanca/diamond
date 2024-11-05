import { useState } from 'react';

export default function NotificationSignup() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-8">
            Be the first to know about future drops and exclusive releases
          </p>

          {submitted ? (
            <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <p className="text-purple-300 text-lg">
                🎉 You're in! Watch your inbox for exclusive updates from Kevin Diamond.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address *"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number (optional)"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 group"
              >
                <span className="group-hover:hidden">Get Notified</span>
                <span className="hidden group-hover:inline">Join the Movement 🎵</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}