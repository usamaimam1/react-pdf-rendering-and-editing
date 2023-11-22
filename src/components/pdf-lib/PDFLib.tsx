import { Viewer, Worker } from "@react-pdf-viewer/core";
import { PDFDocument } from "pdf-lib";
import { useCallback, useEffect, useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFLib = () => {
  const [pdf, setPDF] = useState("");
  const loadPDF = useCallback(async () => {
    try {
      const pdfUrl = "https://arxiv.org/pdf/1701.05234.pdf";

      const existingPdfBytes = await fetch(pdfUrl).then((res) =>
        res.arrayBuffer()
      );
      //   const bytes = new Uint8Array(existingPdfBytes);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Now you can save or display the modified PDF
      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      console.log({ pdfDataUri });
      setPDF(pdfDataUri);
    } catch (err) {
      console.log(err);
    }
  }, []);

//   useEffect(() => {
//     loadPDF();
//   }, [loadPDF]);

  return (
    <div>
      <Worker workerUrl="https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
          }}
        >
          <Viewer fileUrl="../../../assets/resume.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default PDFLib;
