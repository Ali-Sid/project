import React, { useState } from 'react';
import { InvoiceForm } from './components/InvoiceForm';
import { InvoiceView } from './components/InvoiceView';
import { Invoice, ParsedInvoiceItem } from './types/invoice';
import { InvoiceService } from './services/InvoiceService';

function App() {
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  const handleInvoiceGenerated = (items: ParsedInvoiceItem[], logo?: string) => {
    const newInvoice = InvoiceService.createInvoice(items, logo);
    setInvoice(newInvoice);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {!invoice ? (
        <InvoiceForm onInvoiceGenerated={handleInvoiceGenerated} />
      ) : (
        <InvoiceView 
          invoice={invoice} 
          onReset={() => setInvoice(null)} 
        />
      )}
    </div>
  );
}

export default App;