export async function shareInvoice(): Promise<boolean> {
  if (!navigator.share) {
    return false;
  }

  try {
    await navigator.share({
      title: 'Invoice',
      text: 'Check out this invoice',
      url: window.location.href
    });
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'NotAllowedError') {
      console.log('User cancelled sharing');
      return false;
    }
    throw error;
  }
}