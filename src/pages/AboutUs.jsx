import React from 'react';
import Footer from '../components/Footer';
import { NavbarSimple } from '../components/NavBar';
import { Fade , Slide } from "react-awesome-reveal";

export default function AboutUS() {
  return (
    <div>
      <NavbarSimple />



      <div className="bg-gradient-to-r from-blue-900 to-cyan-950 flex flex-col justify-center items-center p-24">
        <Slide>
          <h1 className="text-3xl text-justify text-white mb-6">SOMOS PADEL KING</h1>
        </Slide>
        
        <Fade cascade>
        <p className="text-xl text-white">
          Somos una apasionada empresa dedicada a la venta de productos de pádel y accesorios en todo el país. Nuestra misión es brindar a los amantes del pádel de Argentina una amplia gama de productos de la más alta calidad. Trabajamos en estrecha colaboración con las mejores marcas internacionales del mundo del pádel para ofrecer a nuestros clientes una experiencia excepcional.
        </p>
        <p className="text-xl text-white">
          En <strong>PADELKING</strong>, creemos que el pádel es más que un deporte; es una forma de vida. Nos esforzamos por equipar a jugadores de todos los niveles con las raquetas, pelotas, ropa y accesorios de última generación que necesitan para alcanzar su máximo potencial en la cancha. Nuestro compromiso con la excelencia se refleja en cada producto que vendemos.
        </p>
        <p className="text-xl text-white">
          Nuestra pasión por el pádel, la calidad de nuestros productos y nuestro alcance nacional nos distinguen en el mercado. Estamos orgullosos de servir a la comunidad de pádel en Argentina y esperamos ser tu elección número uno cuando se trata de productos de pádel de primera calidad. Únete a nosotros en nuestra búsqueda de elevar tu experiencia en la cancha y descubre por qué <strong>PADELKING</strong> es la opción preferida de los jugadores de pádel en todo el país.
        </p>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}
