import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/Navbar";
import ReactLogo from "./assets/react.svg";
import Home from "./components/home/Home";
import ReactPDF from "./components/react-pdf/ReactPDF";
import PDFLib from "./components/pdf-lib/PDFLib";
import ReactPDFViewer from "./components/react-pdf-viewer/ReactPDFViewer";
import ReactPDFAnnotator from "./components/react-pdf-annnotator/ReactPDFAnnotator";
import { routes } from "./utils/routes";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const RouteComponents = [ReactPDF, PDFLib, ReactPDFViewer, ReactPDFAnnotator];

export default function App() {
  return (
    <Fragment>
      <NavBar logo={ReactLogo} companyName="PDF Editor App" />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={Home} /> {/* 👈 Renders at /app/ */}
          {routes.map((route, index) => (
            <Route
              key={route.name}
              path={route.name}
              Component={RouteComponents[index]}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
