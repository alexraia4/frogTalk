import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login.js';
import Profile from './Profile.js';
import CreateAccount from './CreateAccount.js';

const router = createBrowserRouter([
  {path: "/", element: <Login/>},
  {path: "/profile", element: <Profile/>},
  {path: "/createaccount", element: <CreateAccount/>}
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}