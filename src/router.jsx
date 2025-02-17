import { createBrowserRouter, Outlet,RouterProvider } from "react-router";
import { Projects } from "./projects";
import { About } from "./About";
import { Services } from "./service";
import { Footer } from "./footer";
import { Header } from "./header";
import { App } from "./App";
import { ContactForm } from "./contact";


export const Routers=(()=>{

   const  router=createBrowserRouter([
          {
        path:"/",
        element:<Applayout />,

        children:[

             {

                path:"/",
                element:<App />
                   
              },
            
              {
            
                path:"/projects",
            
                element:<Projects/>
              },
              {
            
                path:"/services",
            
                element:<Services />
              },

              {
            
                path:"/about",
            
                element:<About />
              },
              {
                path:"/contact",
                element:<ContactForm />,
                
              }
  

        ]
    

    }


])

return <RouterProvider  router={router}/>



})



const Applayout=()=>{



return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
)


}




const ViewFoods=()=>{



    return(
        <>
        <Header></Header>
        <Bestsales />
       <Breakfast />
        <Lunch />
         <Vegan />
         <Meat />  
         <Dessert />
        <Footer></Footer>
        </>
    )
    
    
    }