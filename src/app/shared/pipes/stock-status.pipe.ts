import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
})
export class StockStatusPipe implements PipeTransform {
  transform(qty: number, limit :number): string | null {
    if (qty > limit) {
      return null;
    } else if (qty == 0) {
      return 'out of the stock';
    } else {
      return `only ${qty}`;
    }
  }
}
