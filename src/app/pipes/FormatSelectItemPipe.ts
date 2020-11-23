import {Pipe, PipeTransform} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Pipe({
  name: 'formatSelectItem'
})
export class FormatSelectItemPipe implements PipeTransform {

  // @ts-ignore
  transform(value: any[], valueProperty: string, labelProperty: string): SelectItem[] {
    if (value) {
      return value.map(item => ({
        value: item[valueProperty],
        label: item[labelProperty]
      })) ;
    }
  }
}
