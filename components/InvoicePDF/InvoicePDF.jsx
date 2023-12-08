import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for your PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  address: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2c87c3",
    color: "white",
    padding: 5,
    justifyContent: "space-between",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: 1,
    borderColor: "#2c87c3",
    alignItems: "center",
    padding: 5,
  },
  description: {
    flex: 2,
    textAlign: "left",
  },
  quantity: {
    flex: 1,
    textAlign: "center",
  },
  price: {
    flex: 1,
    textAlign: "center",
  },
  total: {
    flex: 1,
    textAlign: "center",
  },
});

// Sample data for the invoice
const invoiceData = {
  invoiceNumber: "INV-001",
  date: "2023-12-01",
  customerName: "John Doe",
  customerAddress: "123 Main St, City, Country",
  items: [
    { description: "Product 1", quantity: 2, price: 50, total: 100 },
    { description: "Product 2", quantity: 3, price: 30, total: 90 },
  ],
  subtotal: 190,
  tax: 19,
  total: 209,
};

const MyPDF = ({ selectedProducts }) => {
  const todayDate = new Date().toLocaleDateString();
  const total = selectedProducts?.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>SMART BUILD AI</Text>
        <View style={styles.address}>
          <Text>Date: {todayDate}</Text>
        </View>
        <View style={styles.tableHeader}>
          <Text style={styles.description}>Description</Text>

          <Text style={styles.price}>Price</Text>
        </View>
        {selectedProducts.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.description}>{item.title}</Text>

            <Text style={styles.price}>£{item.price}</Text>
          </View>
        ))}

        <View style={styles.tableRow}>
          <Text style={styles.description}></Text>
          <Text style={styles.quantity}></Text>
          <Text style={styles.price}>Total:</Text>
          <Text style={styles.total}>£{total}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;
