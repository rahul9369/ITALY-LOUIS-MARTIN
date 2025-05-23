import React from "react";
import AppLayout from "./components/Applayout";
import About from "./components/About";
import ContactUs from "./components/Contactus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import { AnimatePresence } from "framer-motion";
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
import Qseries from "./components/LineArraySeries/Qseries";
import Cox from "./components/LineArraySeries/Coxseries";
import Famous from "./components/LineArraySeries/Famousseries";
import Fseries from "./components/Fseries";
import Redseries from "./components/Redseries";
import ColumnDetails from "./components/ColumsoundDetails";
import Plasticspeaker from "./components/StagemonitorDetails";
import SubwooferDetails from "./components/SubwooferDetails";
import KSseries from "./components/Subwooferseries/KsSeries";
import Sseries from "./components/Subwooferseries/Sseries";
import ElectronicDetails from "./components/ElectronicDetails";
import Dseries from "./components/ElectronicSeries/Dseries";
import PLseries from "./components/ElectronicSeries/PLseries";
import TIPseries from "./components/ElectronicSeries/TIPseries";
import TTAseries from "./components/ElectronicSeries/TTAseries";
import Kseries from "./components/ColumnSpeaker/Kseries";
import DSseries from "./components/CommercialSeries/Dsseries";
import PDFViewer from "./components/PdfViewer";
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
        path: "/linearray",
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
        path: "/qseries",
        element: <Qseries />,
      },

      {
        path: "/famousseries",
        element: <Famous />,
      },
      {
        path: "coxseries",
        element: <Cox />,
      },
      {
        path: "redseries",
        element: <Redseries />,
      },
      {
        path: "fseries",
        element: <Fseries />,
      },
      {
        path: "sseries",
        element: <Sseries />,
      },
      {
        path: "ksseries",
        element: <KSseries />,
      },
      {
        path: "/electronics",
        element: <Electronic />,
      },
      {
        path: "/dseries",
        element: <Dseries />,
      },
      {
        path: "/plseries",
        element: <PLseries />,
      },
      {
        path: "/kseries",
        element: <Kseries />,
      },
      {
        path: "/dsseries",
        element: <DSseries />,
      },
      {
        path: "/tipseries",
        element: <TIPseries />,
      },
      {
        path: "/ttaseries",
        element: <TTAseries />,
      },
      {
        path: "/product/:model",
        element: <Productdetails />,
      },
      {
        path: "/electronics/:model",
        element: <ElectronicDetails />,
      },

      {
        path: "/column/:model",
        element: <ColumnDetails />,
      },
      {
        path: "/plastic/:model",
        element: <Plasticspeaker />,
      },
      {
        path: "/subwoofer/:model",
        element: <SubwooferDetails />,
      },
      {
        path: "/linearray/:model",
        element: <LineArrayDetails />,
      },
    ],
  },
  {
    path: "/view-pdf",
    element: <PDFViewer />,
  },
]);

const App = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <RouterProvider router={appRouter} />
      </AnimatePresence>
    </>
  );
};

export default App;
