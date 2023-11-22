import { Document, Page } from "react-pdf";
import { useCallback, useState } from "react";
import pdfDoc from "../../assets/resume.pdf";

const ReactPDF = function () {
  const [numPages, setNumPages] = useState(-1);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = useCallback((doc) => {
    console.log({ doc });
    setNumPages(doc.pageNumber);
  }, []);

  const goToPrevPage = useCallback(
    () => setPageNumber(pageNumber - 1),
    [pageNumber]
  );
  const goToNextPage = useCallback(
    () => setPageNumber(pageNumber + 1),
    [pageNumber]
  );

  return (
    <div>
      <nav>
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
      </nav>

      <div style={{ width: 600 }}>
        <Document file={pdfDoc} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>

      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
export default ReactPDF;
