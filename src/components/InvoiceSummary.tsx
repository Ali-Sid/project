import React from 'react';

interface Props {
  subtotal: number;
  tax: number;
  total: number;
}

export function InvoiceSummary({ subtotal, tax, total }: Props) {
  return (
    <div className="flex justify-end">
      <div className="w-64">
        <div className="flex justify-between py-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}