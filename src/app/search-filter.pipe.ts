import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: any, inputValue?: any): any {
    if(!users)return null;
    if(!inputValue)return users;

    inputValue = inputValue.toLowerCase();

    return users.filter(function(data: any){
        return JSON.stringify(data).toLowerCase().includes(inputValue);
    });
  }
}
