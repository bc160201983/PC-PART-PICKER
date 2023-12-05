// "use client";
// import React from "react";
// import { PDFViewer } from "@react-pdf/renderer";
// import InvoicePDF from "@/components/InvoicePDF/InvoicePDF";
// import { useGlobalContext } from "@/context/context";

// const MyPDFPage = () => {
//   // const { cart } = useGlobalContext();
//   const selectedProducts = [
//     // Replace with your product data
//     {
//       id: 1,
//       name: "Product 1",
//       price: 100,
//       image: "/path/to/product1.jpg",
//     },
//     // Add more products as needed
//   ];

//   const customerInfo = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     address: "123 Main St, City",
//   };

//   const invoiceDate = "2023-11-16"; // Replace with the actual invoice date

//   return (
//     <div>
//       <h1>Invoice</h1>
//       <PDFViewer width={600} height={400}>
//         <InvoicePDF
//           selectedProducts={selectedProducts}
//           customerInfo={customerInfo}
//           invoiceDate={invoiceDate}
//         />
//       </PDFViewer>
//     </div>
//   );
// };

// export default MyPDFPage;
