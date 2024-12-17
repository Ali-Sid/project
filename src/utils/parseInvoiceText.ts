import nlp from 'compromise';

export function parseInvoiceText(text: string): { name: string; quantity: number; price: number }[] {
  const doc = nlp(text);
  const items: { name: string; quantity: number; price: number }[] = [];

  // Split text into sentences or segments
  const segments = text.split(/[.,\n]/);

  segments.forEach((segment) => {
    if (!segment.trim()) return;

    const numbers = segment.match(/\d+(\.\d+)?/g)?.map(Number) || [];
    const doc = nlp(segment);
    
    // Try to find product name (nouns that aren't numbers)
    const nouns = doc.nouns().out('array');
    const name = nouns.find(n => !numbers.includes(Number(n))) || '';

    if (name && numbers.length >= 2) {
      items.push({
        name: name.trim(),
        quantity: numbers[0] || 1,
        price: numbers[numbers.length - 1] || 0,
      });
    }
  });

  return items;
}