import nlp from 'compromise';
import { ParsedInvoiceItem } from '../../types/invoice';

export class InvoiceParser {
  static parse(text: string): ParsedInvoiceItem[] {
    const segments = text.split(/[.,\n]/);
    const items: ParsedInvoiceItem[] = [];

    segments.forEach((segment) => {
      const parsedItem = this.parseSegment(segment);
      if (parsedItem) {
        items.push(parsedItem);
      }
    });

    return items;
  }

  private static parseSegment(segment: string): ParsedInvoiceItem | null {
    if (!segment.trim()) return null;

    const numbers = segment.match(/\d+(\.\d+)?/g)?.map(Number) || [];
    const doc = nlp(segment);
    
    const nouns = doc.nouns().out('array');
    const name = nouns.find(n => !numbers.includes(Number(n)));

    if (!name || numbers.length < 2) return null;

    return {
      name: name.trim(),
      quantity: numbers[0] || 1,
      price: numbers[numbers.length - 1] || 0,
    };
  }
}