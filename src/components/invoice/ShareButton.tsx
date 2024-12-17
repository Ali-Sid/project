import React from 'react';
import { Share2 } from 'lucide-react';
import { shareInvoice } from '../../services/share/ShareService';

export function ShareButton() {
  const handleShare = async () => {
    try {
      const shared = await shareInvoice();
      if (!shared) {
        alert(
          'Sharing is not supported on this browser. You can download the invoice instead.'
        );
      }
    } catch (error) {
      console.error('Error sharing:', error);
      alert('Unable to share. You can download the invoice instead.');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}