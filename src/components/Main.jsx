import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import Nav from "./Nav";

function Main() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default Main;
