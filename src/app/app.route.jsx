import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainShell from "./domain/main-shell/main-shell";
import Welcome from "./domain/welcome/welcome";
import System from "./domain/system/system";
import Start from "./domain/welcome/start/start";
import Paper from "./domain/welcome/paper/paper";
import Quantity from "./domain/welcome/quantity/quantity";
import Done from "./domain/welcome/done/done";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainShell />,
    children: [
      { path: "", element: <Welcome /> },
      {
        path: "system",
        element: <System />,
        children: [
          { path: "start", element: <Start /> },
          { path: "paper", element: <Paper /> },
          { path: "quantity", element: <Quantity /> },
          { path: "done", element: <Done /> },
        ],
      },
    ],
  },
]);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
