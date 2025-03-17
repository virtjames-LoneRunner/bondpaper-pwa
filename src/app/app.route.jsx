import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainShell from "./domain/main-shell/main-shell";
import Welcome from "./domain/welcome/welcome";
import System from "./domain/system/system";
import Start from "./domain/welcome/start/start";
import Paper from "./domain/welcome/paper/paper";
import Quantity from "./domain/welcome/quantity/quantity";
import Done from "./domain/welcome/done/done";
import { MainProvider } from "./domain/welcome/main.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainProvider>
        <MainShell />
      </MainProvider>
    ),
    children: [
      { path: "", element: <Welcome /> },
      {
        path: "system",
        element: <System />,
        children: [
          { path: "paper", element: <Paper /> },
          { path: "quantity", element: <Quantity /> },
          { path: "pay", element: <Start /> },
          { path: "done", element: <Done /> },
        ],
      },
    ],
  },
]);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
