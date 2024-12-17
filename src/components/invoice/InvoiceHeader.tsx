import React from 'react';
import { format } from 'date-fns';
import { Invoice } from '../../types/invoice';

interface Props {
  invoice: Invoice;
}

export function InvoiceHeader({ invoice }: Props) {
  return (
    <div className="border-b pb-4 mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-gray-600">Date: {format(invoice.date, 'PPP')}</p>
          <p className="text-gray-600">Invoice #: {invoice.invoiceNumber}</p>
        </div>
      </div>
    </div>
  );
}