import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import TeamSection from './components/TeamSection';
import EgoSection from './components/EgoSection';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastState, setToastState] = useState({ visible: false, message: '' });

  const handleReservation = (guestName) => {
    setToastState({
      visible: true,
      message: `Thank you, ${guestName}! Your table request has been received. Bon appétit! 🐀🍽️`
    });

    setTimeout(() => {
      setToastState({ visible: false, message: '' });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#f8f0df] text-[#251816] font-serif leading-relaxed selection:bg-[#d6aa54] selection:text-[#3b0e12]">
      <Topbar />
      <Hero />
      <Ticker />
      <main>
        <StorySection />
        <MenuSection />
        <TeamSection />
        <EgoSection />
        <GallerySection />
        <ReservationSection onReserve={handleReservation} />
      </main>
      <Footer />
      <Toast message={toastState.message} visible={toastState.visible} />
    </div>
  );
}