import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  const backgroundStyle = {
    backgroundImage: 'url("./fondo-registro.jpg")',
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
  
  export function SignUp() {
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div style={backgroundStyle}></div>
        <div style={formContainerStyle}>
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Crear Cuenta
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Nombre" />
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Contraseña" />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
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
                Register
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                ¿Ya tenés una cuenta?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Iniciá sesión
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    );
  }
  