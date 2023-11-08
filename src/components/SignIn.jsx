import React, { useRef } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Swal from 'sweetalert2'
import { Fade } from "react-awesome-reveal";

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1
};

const inputStyle = {
  background: "white",
};

const inputLabelStyle = {
  color: "white",
};

export function SignIn() {
  const inputEmail = useRef(null); // Crea una referencia para el input de correo
  const inputPassword = useRef(null); // Crea una referencia para el input de contraseña

  const signin = async (event) => {
    event.preventDefault();
    const data = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    try {
      const response = await api.post(apiUrl + endpoints.login, data);
      console.log(response);
      if (response.data.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User signed in!',
          showConfirmButton: false,
          timer: 1500,
        });

        const { user, photo, token } = response.data.response;

        localStorage.setItem('token', JSON.stringify(response.data.response.token))
        localStorage.setItem('user', JSON.stringify(response.data.response.user))
        //dispatch(setUser(user));
        //dispatch(setPhoto(photo));

        navigate('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Authentication failed!',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Authentication failed!',
      });
    }
  };

  return (
    <Fade>
      <div
        className="bg-gradient-to-r from-blue-900 to-cyan-950"
        style={{ display: "flex", width: "100vw", height: "100vh" }}
      >
        <div
          className="hidden md:block"
          style={{
            backgroundImage: 'url("./fondo-inicio.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "50%",
          }}
        ></div>
        <div className="w-full md:w-1/2" style={formContainerStyle}>
          <Card color="transparent" shadow={false}>
            <img className="w-44" src="./logo.png" alt="Your Company" />
            <Typography variant="h4" color="white">
              Bienvenidos!
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!
            </Typography>
            <form onSubmit={signin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-2">
                <span className="text-lg font-medium text-white">Email</span>
                <Input ref={inputEmail} size="lg" labelProps={inputLabelStyle} style={inputStyle} />
                <span className="text-lg font-medium text-white">Contraseña</span>
                <Input ref={inputPassword}
                  type="password"
                  size="lg"
                  labelProps={inputLabelStyle}
                  style={inputStyle}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="white"
                    className="flex items-center font-normal"
                  >
                    Acepto los
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Términos y condiciones
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                Iniciar Sesión
              </Button>
              <Typography color="white" className="mt-4 text-center font-normal">
                ¿No tenés cuenta?{" "}
                <a href="/registro" className="font-medium text-white">
                  Crear Cuenta
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </Fade>
  );
}
