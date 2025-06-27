import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Nibesh_Upadhyaya.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  // Adjust for responsiveness
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // When PDF is loaded, set the total number of pages
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* PDF Preview with Scrollable Area */}
        <Row className="resume justify-content-center">
          <div
            style={{
              height: "80vh",
              overflowY: "auto",  // Enable vertical scrolling
              padding: "1rem",
              width: "100%",  // Full width
              display: "flex",
              justifyContent: "center",  // Horizontally center content
              // Removed `alignItems: "center"` to prevent vertical centering
            }}
          >
            <Document
              file={pdf}
              onLoadSuccess={onLoadSuccess}  // Update numPages
            >
              {/* Render each page with spacing and responsive scale */}
              {[...Array(numPages)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "20px",  // Space between pages
                    display: "block",
                    width: "100%",  // Make sure the page takes full width
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    scale={width > 786 ? 1.7 : 0.6} // Adjust scale based on screen size
                  />
                </div>
              ))}
            </Document>
          </div>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
