import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mapValues'
})
export class MapValuesPipe implements PipeTransform {

    transform(value: any, args?: any[]): Object[] {
        let returnArray = [];
        if (value != null) {
            Object.keys(value).forEach((currentKey) => {
                returnArray.push({
                    key: currentKey,
                    val: value[currentKey]
                });
            });
        }
        return returnArray;
    }
}
