import React from 'react';
import { Invoice } from '../types/invoice';
import { InvoiceTemplate } from './InvoiceTemplate';

interface Props {
  invoice: Invoice;
  onReset: () => void;
}

export function InvoiceView({ invoice, onReset }: Props) {
  return (
    <div>
      <InvoiceTemplate invoice={invoice} />
      <div className="mt-4 text-center">
        <button
          onClick={onReset}
          className="text-blue-600 hover:text-blue-800"
        >
          Create Another Invoice
        </button>
      </div>
    </div>
  );
}