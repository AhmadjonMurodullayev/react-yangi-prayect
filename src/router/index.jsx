import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import { AdminLayout,Course, StudentLayout, SingIn , Students, Teacher,Group} from "@pages";
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
         <Route index element={<SingIn/>} />

         <Route path="student-layaut" element={<StudentLayout/>}>

         </Route>

         <Route path="admin-layout" element={<AdminLayout/>}>
           <Route index element={<Teacher/>}/>
           <Route path="student" element={<Students/>}/>
           <Route path="course" element={<Course/>}/>
           <Route path="group" element={<Group/>}/>
         </Route>

        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  export default Index;
