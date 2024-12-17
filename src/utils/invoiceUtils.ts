import { Invoice, InvoiceItem } from '../types/invoice';
import { v4 as uuidv4 } from 'uuid';

export const TAX_RATE = 0.1; // 10% tax rate

export function calculateInvoiceTotals(items: InvoiceItem[]): {
  subtotal: number;
  tax: number;
  total: number;
} {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return { subtotal, tax, total };
}

export function generateInvoiceNumber(): string {
  return `INV-${Date.now().toString().slice(-6)}`;
}

export function createInvoiceItems(items: { name: string; quantity: number; price: number }[]): InvoiceItem[] {
  return items.map(item => ({
    id: uuidv4(),
    ...item
  }));
}