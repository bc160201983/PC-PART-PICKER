"use client";
import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import InvoicePDF from "../InvoicePDF/InvoicePDF";

import { BsSave } from "react-icons/bs";
// import InvoicePDF from "./InvoicePDF";

const DownloadPDFButton = ({ selectedProducts }) => {
  console.log(selectedProducts);
  return (
    <>
      <div>
        <PDFDownloadLink
          document={<InvoicePDF selectedProducts={selectedProducts} />}
          fileName="build.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default DownloadPDFButton;
