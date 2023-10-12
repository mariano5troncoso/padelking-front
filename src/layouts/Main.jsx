import { Outlet } from "react-router-dom"

export default function Main(){
    return (
      <>
          <div className="flex-col min-h-[100vh] w-full justify-between items-center bg-gray-200">
             
              <Outlet />
          </div>
          
      </>
    )
}