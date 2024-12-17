export interface ParsedInvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

export interface InvoiceItem extends ParsedInvoiceItem {
  id: string;
}

export interface Invoice {
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  date: Date;
  invoiceNumber: string;
  businessLogo?: string;
}

export interface PaymentStatus {
  isPaid: boolean;
  transactionId?: string;
}