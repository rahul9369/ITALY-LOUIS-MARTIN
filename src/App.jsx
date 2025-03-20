import React from "react";
import AppLayout from "./components/Applayout";
import About from "./components/About";
import ContactUs from "./components/Contactus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import LinearArray from "./components/LinearArray";
import PointSource from "./components/Pointsource";
import Stagemonitor from "./components/Stagemonitor";
import Subwoofer from "./components/Subwoofer";
import Columsound from "./components/Columsoundspeaker";
import Electronic from "./components/Electronics";
import Productdetails from "./components/Productdetails";
import LineArrayDetails from "./components/LineArrayDetails";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/lineararray",
        element: <LinearArray />,
      },
      {
        path: "/pointsource",
        element: <PointSource />,
      },
      {
        path: "/stagemonitor",
        element: <Stagemonitor />,
      },
      {
        path: "/subwoofer",
        element: <Subwoofer />,
      },
      {
        path: "/columsound",
        element: <Columsound />,
      },
      {
        path: "/electronics",
        element: <Electronic />,
      },
      {
        path: "/product/:model",
        element: <Productdetails />,
      },
      {
        path: "/linearray/:model",
        element: <LineArrayDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
