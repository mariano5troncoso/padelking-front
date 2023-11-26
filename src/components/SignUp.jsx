import React, { useRef } from "react";
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { api, apiUrl, endpoints } from "../utils/api";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const inputStyle = {
  background: "white",
};

const inputLabelStyle = {
  color: "white",
};

export function SignUp() {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhoto = useRef(null);
  const inputPassword = useRef(null);
  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();

    const data = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    try {
      const response = await api.post(apiUrl + endpoints.register, data);


      if (response.data.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User registered!',
          showConfirmButton: false,
          timer: 1500,
        });

        // Puedes agregar aquí lógica adicional después del registro exitoso

        navigate('/iniciar-sesion'); // Redirige al usuario a la página de inicio de sesión
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration failed!',
        });
      }
    } catch (error) {
      console.error("Error during signup request:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registration failed!',
      });
    }
  };

  return (
    <Fade>
      <div className="bg-gradient-to-r from-slate-900 to-red-800" style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <div className="hidden md:block" style={{ backgroundImage: 'url("./fondo-registro.jpg")', backgroundSize: "cover", backgroundPosition: "center", width: "50%" }}></div>
        <div className="w-full md:w-1/2" style={formContainerStyle}>
          <Card color="transparent" shadow={false}>
            <img className="w-44" src="./logo.png" alt="Your Company" />
            <Typography variant="h4" color="white">Crear Cuenta</Typography>
            <Typography color="white" className="mt-1 font-normal">Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!</Typography>
            <form onSubmit={signup} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-2">
                <span className="text-lg font-medium text-white">Nombre</span>
                <Input ref={inputName} size="lg" labelProps={inputLabelStyle} style={inputStyle} />

                <span className="text-lg font-medium text-white">Email</span>
                <Input ref={inputEmail} size="lg" labelProps={inputLabelStyle} style={inputStyle} />

                <span className="text-lg font-medium text-white">Foto</span>
                <Input ref={inputPhoto} size="lg" labelProps={inputLabelStyle} style={inputStyle} />

                <span className="text-lg font-medium text-white">Contraseña</span>
                <Input ref={inputPassword} type="password" size="lg" labelProps={inputLabelStyle} style={inputStyle} />
              </div>
              <Checkbox
                label={
                  <Typography variant="small" color="white" className="flex items-center font-normal">
                    Acepto los
                    <a href="#" className="font-medium transition-colors hover:text-gray-900">&nbsp;Términos y condiciones</a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button type="submit" className="mt-6" fullWidth>
                Registrar
              </Button>
              <Typography color="white" className="mt-4 text-center font-normal">
                ¿Ya tenés una cuenta?{" "}
                <a href="/iniciar-sesion" className="font-medium text-white">
                  Iniciá sesión
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </Fade>
  );
}
