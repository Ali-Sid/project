import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Invoice } from '../../types/invoice';
import { generatePDF } from '../../services/pdf/PDFGenerator';
import { PayPalHostedButton } from '../payment/PayPalHostedButton';

interface Props {
  invoice: Invoice;
}

export function PDFDownloadButton({ invoice }: Props) {
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // In a real app, you'd verify the payment on your backend
  const handleVerifyPayment = () => {
    setIsPaid(true);
  };

  if (!isPaid && !showPayment) {
    return (
      <button
        onClick={() => setShowPayment(true)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download PDF ($2)
      </button>
    );
  }

  if (showPayment && !isPaid) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <h3 className="text-xl font-bold mb-4">Complete Payment</h3>
          <p className="mb-4 text-gray-600">
            Pay $2 to download your invoice with your business logo and branding.
          </p>
          <PayPalHostedButton onCancel={() => setShowPayment(false)} />
          <div className="mt-4 border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">Already paid?</p>
            <button
              onClick={handleVerifyPayment}
              className="text-blue-600 hover:text-blue-800"
            >
              Click here to download your invoice
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PDFDownloadLink
      document={generatePDF(invoice)}
      fileName={`invoice-${invoice.invoiceNumber}.pdf`}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
    >
      {({ loading }) => (
        <>
          <Download className="w-4 h-4" />
          {loading ? 'Generating PDF...' : 'Download PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
}