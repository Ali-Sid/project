import React from 'react';

interface Props {
  onCancel: () => void;
}

export function PayPalHostedButton({ onCancel }: Props) {
  return (
    <div className="text-center">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="2NXSMPQJZRTFY" />
        <input type="hidden" name="currency_code" value="USD" />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-4 w-full justify-center"
        >
          Pay with PayPal
        </button>
      </form>
      <p className="text-sm text-gray-600 mb-4">
        After payment, return to this page to download your invoice.
      </p>
      <button
        onClick={onCancel}
        className="text-gray-600 hover:text-gray-800"
      >
        Cancel
      </button>
    </div>
  );
}