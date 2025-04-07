import { useLocation } from "react-router-dom";

const PDFViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pdfUrl = queryParams.get("url");
  const fileName = queryParams.get("name") || "specifications.pdf";

  if (!pdfUrl) {
    return <div className="text-center text-red-500 mt-10">PDF not found!</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header with download button */}
      <div className="bg-gray-900  text-white p-2 flex justify-end items-center">
        {/* <h1 className="text-lg font-semibold">Product Specifications</h1> */}
        <a
          href={pdfUrl}
          download={fileName}
          className="bg-green-600  px-4 py-2 rounded hover:bg-green-700 transition">
          Download PDF
        </a>
      </div>

      {/* PDF Display */}
      <iframe
        src={pdfUrl}
        className="flex-1"
        title="Product PDF"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PDFViewer;
