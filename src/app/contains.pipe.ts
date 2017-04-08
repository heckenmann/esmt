import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contains'
})
export class ContainsPipe implements PipeTransform {

    transform(value: any, keys: string[]): boolean {
        return value != null && keys != null && keys.every(k => value.k != null);
    }
}
