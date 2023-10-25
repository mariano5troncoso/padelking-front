import React from 'react';
import { CarouselCustomArrows } from '../components/Carousel';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { NavbarSimple } from '../components/NavBar'; 

export default function Index() {
  return (
    <>
      <NavbarSimple />
      <CarouselCustomArrows />
      <header className="bg-gradient-to-r from-blue-900 to-cyan-950">
        <div className="mt-2">
          <h1 className="text-3xl font-bold tracking-tight text-white text-center">Padel KING</h1>
        </div>
      </header>
      <main>
        <Products />
        <Footer />
      </main>
    </>
  );
}
