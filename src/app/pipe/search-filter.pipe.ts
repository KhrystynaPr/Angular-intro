import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(users: any, value: string): any {
    if (!users) return null;

    if (!value) return users;

    return users.filter((data: any) => data.name.includes(value));
  }
}
