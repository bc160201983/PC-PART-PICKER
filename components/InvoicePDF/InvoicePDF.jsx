import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

const InvoicePDF = ({ selectedProducts, customerInfo, invoiceDate }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Invoice</Text>
        <Text style={styles.title}>Invoice Date: {invoiceDate}</Text>
        <Text style={styles.title}>Customer Information:</Text>
        <Text style={styles.text}>Name: {customerInfo.name}</Text>
        <Text style={styles.text}>Email: {customerInfo.email}</Text>
        <Text style={styles.text}>Address: {customerInfo.address}</Text>
        <Text style={styles.title}>Selected Products:</Text>
        {selectedProducts.map((product) => (
          <View key={product.id} style={{ marginBottom: 10 }}>
            <Image src={product.image} style={styles.image} />
            <Text style={styles.text}>Product Name: {product.name}</Text>
            <Text style={styles.text}>Price: {product.price}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default InvoicePDF;
