import React from 'react';
import { Invoice } from '../../types/invoice';
import InvoicePDFDocument from './PDFDocument';

export const generatePDF = (invoice: Invoice) => {
  return React.createElement(InvoicePDFDocument, { invoice });
};