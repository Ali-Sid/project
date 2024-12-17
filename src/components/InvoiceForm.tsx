import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { InvoiceParser } from '../services/nlp/InvoiceParser';
import { ParsedInvoiceItem } from '../types/invoice';
import { LogoUpload } from './invoice/LogoUpload';

interface Props {
  onInvoiceGenerated: (items: ParsedInvoiceItem[], logo?: string) => void;
}

export function InvoiceForm({ onInvoiceGenerated }: Props) {
  const [prompt, setPrompt] = useState('');
  const [logo, setLogo] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const items = InvoiceParser.parse(prompt);
    onInvoiceGenerated(items, logo);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">AI Invoice Generator</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <LogoUpload onLogoChange={setLogo} />
        
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Describe your invoice items
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Example: 2 laptops at $999 each, 1 mouse for $29.99, and 3 keyboards costing $59.99 per piece"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
}