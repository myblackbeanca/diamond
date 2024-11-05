import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MinyDrop from './components/MinyDrop';
import Events from './components/Events';
import MusicPlayer from './components/MusicPlayer';
import YouTubeSection from './components/YouTubeSection';
import Subscription from './components/Subscription';
import NotificationSignup from './components/NotificationSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <MinyDrop />
        <Events />
        <MusicPlayer />
        <YouTubeSection />
        <Subscription />
        <NotificationSignup />
      </main>
      <Footer />
    </div>
  );
}

export default App;