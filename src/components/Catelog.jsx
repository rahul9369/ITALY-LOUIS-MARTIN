import React from "react";
import LOUISMARTINCATALOGUE from "../assets/pdf/LouisMartinCatalogue.pdf";
import pointsource from "../assets/imagecatelog.jpg";
import logo from "../assets/Logo.png";

function Catelog() {
  const handleOpenPDF = () => {
    // Open PDF in a new window with download button
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write(`
      <html>
        <head>
          <title>LOUIS MARTIN CATALOGUE</title>
          <link rel="icon" type="image/png" href="/logo.png">
          <style>
            body { margin: 0; padding: 0px 0px; font-family: Arial, sans-serif; }
            .header { 
              position: fixed; 
              top: 0; 
              left: 0; 
              right: 0; 
              background: #9ca3af; 
              padding: 1px 20px; 
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              z-index: 1000;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 60px;
            }
            .logo-container {
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .logo {
              height: 40px;
              width: auto;
            }
            .header-title {
              font-size: 1.2rem;
              font-weight: 600;
              color: #333;
            }
            .download-btn {
              background:	#eab308;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 6px;
              cursor: pointer;
              font-weight: 600;
              transition: background 0.3s;
            }
            .download-btn:hover {
              background:#ca8a04;
            }
            iframe {
              margin-top: 60px;
              width: 100%;
              height: calc(100vh - 6px);
              border: none;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-container">
              <img src="${logo}" alt="Louis Martin Logo" class="logo">
              <span class="header-title">LOUIS MARTIN CATALOGUE</span>
            </div>
            <button class="download-btn" onclick="downloadPDF()">Download PDF</button>
          </div>
          <iframe src="${LOUISMARTINCATALOGUE}#page=1" type="application/pdf"></iframe>
          <script>
            function downloadPDF() {
              const link = document.createElement('a');
              link.href = '${LOUISMARTINCATALOGUE}#page=1';
              link.download = 'LOUIS_MARTIN_Catalogue.pdf';
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
    <div className="relative w-[95%] mx-auto h-[120px] sm:h-[250px] md:h-[300px] rounded-md overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pointsource})`,
        }}>
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 md:p-8 h-full">
        <div className="max-w-2xl text-center text-white">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">LOUIS MARTIN Catalog</h1> */}
          {/* <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 px-2">
            Explore our exclusive collection of premium products.
           
          </p> */}
          <button
            onClick={handleOpenPDF}
            className="
  bg-transparent 
  border border-white/40
  mt-16 sm:mt-40 
  cursor-pointer 
  hover:bg-red-800 hover:border-red-800
  text-white 
  px-6 sm:px-8 
  py-1 sm:py-4 
  rounded-lg 
  text-[12px] sm:text-xl 
  font-semibold 
  transition-all duration-300 
  transform hover:scale-105
">
             Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Catelog;
