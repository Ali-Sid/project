import { v4 as uuidv4 } from 'uuid';
import { Invoice, InvoiceItem, ParsedInvoiceItem } from '../types/invoice';

export class InvoiceService {
  private static readonly TAX_RATE = 0.1;

  static createInvoice(items: ParsedInvoiceItem[], businessLogo?: string): Invoice {
    const invoiceItems = this.createInvoiceItems(items);
    const { subtotal, tax, total } = this.calculateTotals(invoiceItems);

    return {
      items: invoiceItems,
      subtotal,
      tax,
      total,
      date: new Date(),
      invoiceNumber: this.generateInvoiceNumber(),
      businessLogo
    };
  }

  private static createInvoiceItems(items: ParsedInvoiceItem[]): InvoiceItem[] {
    return items.map(item => ({
      id: uuidv4(),
      ...item
    }));
  }

  private static calculateTotals(items: InvoiceItem[]) {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const tax = subtotal * this.TAX_RATE;
    const total = subtotal + tax;

    return { subtotal, tax, total };
  }

  private static generateInvoiceNumber(): string {
    return `INV-${Date.now().toString().slice(-6)}`;
  }
}