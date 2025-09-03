import { useLocation } from "react-router-dom";

const PDFViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Raw URL from query
  let rawUrl = queryParams.get("url") || "";
  const fileName = queryParams.get("name") || "specifications.pdf";

  // ✅ Sanitize URL -> only keep till .pdf
  let pdfUrl = "";
  if (rawUrl) {
    const pdfIndex = rawUrl.toLowerCase().indexOf(".pdf");
    pdfUrl = pdfIndex !== -1 ? rawUrl.substring(0, pdfIndex + 4) : rawUrl;
  }

  // Validation check
  if (!pdfUrl || !pdfUrl.endsWith(".pdf")) {
    return (
      <div className="text-center text-red-500 mt-10">
        ⚠️ Invalid or missing PDF URL!
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header with download button */}
      <div className="bg-gray-900 text-white p-2 flex justify-end items-center">
        <a
          href={pdfUrl}
          download={fileName}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition">
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
