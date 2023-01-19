import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value?: string | Date): string {
    const date = value && new Date(value);

    if (!date || !date.getTime()) {
      return '';
    }

    const month = date.getMonth() + 1;
    const fixedMonth = month > 9 ? month : `0${month}`;
    const day = date.getDate();
    const fixedDay = day > 9 ? day : `0${day}`;

    return `${fixedDay}/${fixedMonth}/${date.getFullYear()}`;
  }
}
