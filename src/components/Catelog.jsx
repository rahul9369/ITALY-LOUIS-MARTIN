import React from "react";
import LOUISMARTINCATALOGUE from "../assets/newpdf/LouisMartinCataloguenew.pdf";

function Catalog() {
  const openPDFWithDownload = () => {
    const pdfWindow = window.open("", "_blank");

    pdfWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Louis Martin Catalogue</title>
          <style>
            body {
              margin: 0;
              font-family: Arial, sans-serif;
            }
            .header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              height: 60px;
              background: #ffffff;
              border-bottom: 1px solid #e5e7eb;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              padding: 0 20px;
              z-index: 1000;
            }
            .download-btn {
              background: #dc2626;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
            }
            .download-btn:hover {
              background: #b91c1c;
            }
            iframe {
              margin-top: 60px;
              width: 100%;
              height: calc(100vh - 60px);
              border: none;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <button class="download-btn" onclick="downloadPDF()">Download</button>
          </div>

          <iframe src="${LOUISMARTINCATALOGUE}" type="application/pdf"></iframe>

          <script>
            function downloadPDF() {
              const link = document.createElement('a');
              link.href = '${LOUISMARTINCATALOGUE}';
              link.download = 'Louis_Martin_Catalogue.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          </script>
        </body>
      </html>
    `);
  };

  return (
    <div className="w-full py-5 bg-gray-100 flex flex-col items-center ">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Product Catalogue
      </h2>

      <button
        onClick={openPDFWithDownload}
        className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-medium transition">
        view
      </button>
    </div>
  );
}

export default Catalog;
