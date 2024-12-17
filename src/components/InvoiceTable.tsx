import React from 'react';
import { InvoiceItem } from '../types/invoice';

interface Props {
  items: InvoiceItem[];
}

export function InvoiceTable({ items }: Props) {
  return (
    <div className="mb-8">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Item</th>
            <th className="text-right py-2">Quantity</th>
            <th className="text-right py-2">Price</th>
            <th className="text-right py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2">{item.name}</td>
              <td className="text-right py-2">{item.quantity}</td>
              <td className="text-right py-2">${item.price.toFixed(2)}</td>
              <td className="text-right py-2">${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}