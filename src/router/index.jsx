import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import { AdminLayout, StudentLayout, SingIn} from "@pages";
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
         <Route Index element={<SingIn/>} />

         <Route path="student-layaut" element={<StudentLayout/>}>

         </Route>

         <Route path="admin-layout" element={<AdminLayout/>}>

         </Route>

        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  export default Index;
