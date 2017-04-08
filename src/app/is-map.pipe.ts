import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isMap'
})
export class IsMapPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value != null && typeof value === 'object';
    }

}
