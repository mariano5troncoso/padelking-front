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
      <header className="bg-white shadow">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Padel KING</h1>
        </div>
      </header>
      <main>
        <Products />
        <Footer />
      </main>
    </>
  );
}
