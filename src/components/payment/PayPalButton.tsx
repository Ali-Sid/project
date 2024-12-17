import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface Props {
  onSuccess: (transactionId: string) => void;
  onError: () => void;
}

export function PayPalButton({ onSuccess, onError }: Props) {
  return (
    <PayPalScriptProvider options={{ 
      "client-id": "2NXSMPQJZRTFY", // Replace with your PayPal client ID in production
      currency: "USD"
    }}>
      <PayPalButtons
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "2.00" // $2 per invoice
              }
            }]
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          onSuccess(order?.id || '');
        }}
        onError={onError}
        style={{ layout: "horizontal" }}
      />
    </PayPalScriptProvider>
  );
}