import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datelatam'
})
export class DatelatamPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);

    const day = date.getUTCDate().toString().padStart(2, '0');
    const monthName = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${day} ${monthName} ${year} ${hours}:${minutes}`;
  }

}
