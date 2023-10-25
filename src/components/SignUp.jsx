import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

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
  return (
    <div
      className="bg-gradient-to-r from-slate-900 to-red-800"
      style={{ display: "flex", width: "100vw", height: "100vh" }}
    >
      <div
        className="hidden md:block"
        style={{
          backgroundImage: 'url("./fondo-registro.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "50%",
        }}
      ></div>
      <div className="w-full md:w-1/2" style={formContainerStyle}>
        <Card color="transparent" shadow={false}>
          <img className="w-44" src="./logo.png" alt="Your Company" />
          <Typography variant="h4" color="white">
            Crear Cuenta
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-2">
              <span className="text-lg font-medium text-white">Nombre</span>
              <Input size="lg" labelProps={inputLabelStyle} style={inputStyle} />
              <span className="text-lg font-medium text-white">Email</span>
              <Input size="lg" labelProps={inputLabelStyle} style={inputStyle} />
              <span className="text-lg font-medium text-white">Contraseña</span>
              <Input
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
    
  );
}
