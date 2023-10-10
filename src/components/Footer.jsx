import React from 'react';

export default function Footer() {
 
  
  return (

    <footer className="bg-neutral-100 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-200 lg:text-left w-full">
      
      <div className="flex items-center justify-center border-b-2 border-t-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-center"> {/* Cambiamos lg:justify-between a lg:justify-center */}
        <div className="flex space-x-6 justify-center"> {/* Agregamos justify-center */}
          <a className="text-neutral-600 dark:text-neutral-200 flex items-center flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

            <strong className='flex flex-col'>ENVIAMOS TU COMPRA</strong>
            <p>Entregas a todo el país</p>
          </a>
          <a className="text-neutral-600 dark:text-neutral-200 flex items-center flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>

            <strong>PAGÁ COMO QUIERAS</strong>
            <p>Tarjetas de crédito o efectivo</p>
          </a>
          <a className="text-neutral-600 dark:text-neutral-200 flex items-center flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>

            <strong>COMPRÁ CON SEGURIDAD</strong>
            <p>Tus datos siempre protegidos</p>
          </a>
        </div>
      </div>


      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className=" grid-1 grid gap-8  md:grid-cols-3 lg:grid-cols-4">
          {/* <!-- Tailwind Elements section --> */}
          <div className="flex-col">
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">NAVEGACIÓN</h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Inicio</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Paletas</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Indumentaria</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Accesorios</a>
            </p>
          </div>
          </div>
          {/* <!-- Products section --> */}
          <div>
  <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">REDES SOCIALES</h6>
  <p className="mb-4">
    <img className='h-8 red-icon' src='./Facebook.png' />
  </p>
  <p className="mb-4">
    <img className='h-8 green-icon' src='./tw.png' />
  </p>
  <p className="mb-4">
    <img className='h-8 blue-icon' src='./insta.png' />
  </p>
</div>


          {/* <!-- Useful links section --> */}
          <div>
          <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">MEDIOS DE PAGOS</h6>
            <div className='col-foot grid grid-cols-3'>
            <p className="mb-1">
              <img className='h-8' src='./american-express.png' />
            </p>
            <p className="">
              <img className='h-8' src='./cabal.png' />
            </p>
            <p className="">
              <img className='h-8' src='./correo-argentino.png' />
            </p>
            <p className="mb-1">
              <img className='h-8' src='./diners-club.png' />
            </p>
            <p>
              <img className='h-8' src='./maestro.png' />
            </p>
            <p>
              <img className='h-8' src='./mastercard.png' />
            </p>
            <p className="mb-1">
              <img className='h-8' src='./mercadopago.png' />
            </p>
            <p>
              <img className='h-8' src='./naranja.png' />
            </p>
            <p>
              <img className='h-8' src='./nativa.png' />
            </p>
            <p>
              <img className='h-8' src='./pagofacil.png' />
            </p>
            <p>
              <img className='h-8' src='./rapipago.png' />
            </p>
            <p>
              <img className='h-8' src='./visa.png' />
            </p>
            </div>
            
           



          </div>

          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">CONTACTANOS
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Barranqueras, Chaco, Argentina
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="mr-3 h-5 w-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              padelking.arg@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              + 54 3624 930028
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clipRule="evenodd" />
              </svg>
              + 1 408 303 4435
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: TODOS LOS DERECHOS RESERVADOS.</span>
        <a className="font-semibold text-neutral-600 dark:text-neutral-400" href="localhost:5173/"> PadelKing</a>
      </div>
    </footer>
  );
}

