import React from 'react';
import { Invoice } from '../types/invoice';
import { InvoiceHeader } from './invoice/InvoiceHeader';
import { InvoiceTable } from './InvoiceTable';
import { InvoiceSummary } from './InvoiceSummary';
import { PDFDownloadButton } from './invoice/PDFDownloadButton';
import { ShareButton } from './invoice/ShareButton';

interface Props {
  invoice: Invoice;
}

export function InvoiceTemplate({ invoice }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <InvoiceHeader invoice={invoice} />
      <InvoiceTable items={invoice.items} />
      <InvoiceSummary
        subtotal={invoice.subtotal}
        tax={invoice.tax}
        total={invoice.total}
      />
      <div className="mt-8 flex gap-4 justify-end">
        <PDFDownloadButton invoice={invoice} />
        <ShareButton />
      </div>
    </div>
  );
}