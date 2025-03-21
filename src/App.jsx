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
import Distributor from "./components/Distributor";
import News from "./components/News";
import CaseSection from "./components/Case";
import DownloadPage from "./components/Download";
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
        path: "/distributor",
        element: <Distributor />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/download",
        element: <DownloadPage />,
      },
      {
        path: "/case",
        element: <CaseSection />,
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
