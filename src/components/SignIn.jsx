import { withTheme } from "@emotion/react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Label } from "flowbite-react";
  
  const backgroundStyle = {
    backgroundImage: 'url("./fondo-inicio.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '50%',
  };
  
  const formContainerStyle = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const inputStyle = {
    background: 'white',
  };

  const inputLabelStyle = {
    color: 'white',
  }
  
  export function SignIn() {
    return (
      <div class="bg-gradient-to-r from-blue-900 to-cyan-950 ..."  style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div  style={backgroundStyle}  ></div>
        <div style={formContainerStyle}>
        
          <Card color="transparent" shadow={false}>
          <img
                  className="w-44"
                  src="./logo.png"
                  alt="Your Company"
                />
            <Typography variant="h4" color="white">
              Bienvenidos!
            </Typography>
            <Typography color="white" className="mt-1 font-normal" >
              Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
            <div className="mb-4 flex flex-col gap-2">
                <span class=" text-lg font-medium text-white">Email</span>
                <Input size="lg" labelProps={inputLabelStyle} style={inputStyle} />
                <span class=" text-lg font-medium text-white">Contraseña</span>
                <Input type="password" size="lg" labelProps={inputLabelStyle} style={inputStyle} />
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
    );
  }
  