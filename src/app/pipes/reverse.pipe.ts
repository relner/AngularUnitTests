import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(typeof value !== 'string') {
      throw new Error('ReversePipe: This is not a string');
    }

    let newString = '';
    for(let i = value.length - 1; i>= 0; i--){
      newString += value.charAt(i);
    }

    return newString;
  }

}
