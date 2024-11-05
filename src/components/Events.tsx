import { useState } from 'react';

const events = [
  {
    date: '2024-11-14',
    venue: 'MINY Holders Exclusive Event',
    location: 'Secret Location',
    exclusive: true,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    date: '2024-12-25',
    venue: 'Christmas in New York',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
  },
  {
    date: '2024-12-31',
    venue: 'New Year\'s Eve Spectacular',
    location: 'New York, NY',
    multiDay: true,
    endDate: '2025-01-01',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80'
  }
];

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleTicketRequest = (eventDate: string, isExclusive: boolean) => {
    setSelectedEvent(eventDate);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (events.find(e => e.date === selectedEvent)?.exclusive && password !== 'diamondone') {
      return;
    }
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Upcoming Events
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {events.map((event) => (
            <div key={event.date} className="hexagon-container">
              <div
                className="hexagon"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="hexagon-overlay" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                  <div className="text-purple-400 font-mono mb-2 text-sm">
                    {event.multiDay ? (
                      <>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                        })}
                        {' - '}
                        {new Date(event.endDate!).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </>
                    ) : (
                      new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{event.venue}</h3>
                  <p className="text-gray-200 mb-4 text-sm">{event.location}</p>
                  <button
                    onClick={() => handleTicketRequest(event.date, !!event.exclusive)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-500 transition-colors transform hover:scale-105"
                  >
                    {event.exclusive ? 'Reserve Seat' : 'Request Invite'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 p-8 rounded-xl max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                {events.find(e => e.date === selectedEvent)?.exclusive 
                  ? 'MINY Holder Verification' 
                  : 'Request Event Invite'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {events.find(e => e.date === selectedEvent)?.exclusive ? (
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter MINY holder password"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                ) : (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                  </>
                )}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}