import React from 'react';
import { Document, Page, View, Text, Image } from '@react-pdf/renderer';
import { Invoice } from '../../types/invoice';
import { format } from 'date-fns';
import { pdfStyles } from './pdfStyles';

interface PDFDocumentProps {
  invoice: Invoice;
}

function InvoicePDFDocument({ invoice }: PDFDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {invoice.businessLogo && (
          <View style={pdfStyles.logo}>
            <Image src={invoice.businessLogo} style={pdfStyles.logoImage} />
          </View>
        )}
        
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.title}>Invoice</Text>
          <Text style={pdfStyles.text}>
            Date: {format(invoice.date, 'PPP')}
          </Text>
          <Text style={pdfStyles.text}>
            Invoice #: {invoice.invoiceNumber}
          </Text>
        </View>

        <View style={pdfStyles.table}>
          <View style={[pdfStyles.tableRow, pdfStyles.tableHeader]}>
            <Text style={pdfStyles.tableCell}>Item</Text>
            <Text style={pdfStyles.tableCell}>Quantity</Text>
            <Text style={pdfStyles.tableCell}>Price</Text>
            <Text style={pdfStyles.tableCell}>Total</Text>
          </View>
          {invoice.items.map((item) => (
            <View key={item.id} style={pdfStyles.tableRow}>
              <Text style={pdfStyles.tableCell}>{item.name}</Text>
              <Text style={pdfStyles.tableCell}>{item.quantity}</Text>
              <Text style={pdfStyles.tableCell}>
                ${item.price.toFixed(2)}
              </Text>
              <Text style={pdfStyles.tableCell}>
                ${(item.quantity * item.price).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        <View style={pdfStyles.summary}>
          <Text style={pdfStyles.text}>
            Subtotal: ${invoice.subtotal.toFixed(2)}
          </Text>
          <Text style={pdfStyles.text}>
            Tax (10%): ${invoice.tax.toFixed(2)}
          </Text>
          <Text style={[pdfStyles.text, { fontWeight: 'bold' }]}>
            Total: ${invoice.total.toFixed(2)}
          </Text>
        </View>

        <View style={pdfStyles.footer}>
          <Text style={pdfStyles.footerText}>
            Created with InvoiceAI
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default InvoicePDFDocument;