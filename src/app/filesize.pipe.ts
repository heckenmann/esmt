import { Pipe, PipeTransform } from '@angular/core';

/*
* https://gist.github.com/yrezgui/5653591
*/
@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(value))
      value = 0;

    if (value < 1024)
      return value + ' Bytes';

    value /= 1024;

    if (value < 1024)
      return value.toFixed(2) + ' Kb';

    value /= 1024;

    if (value < 1024)
      return value.toFixed(2) + ' Mb';

    value /= 1024;

    if (value < 1024)
      return value.toFixed(2) + ' Gb';

    value /= 1024;

    return value.toFixed(2) + ' Tb';
  }

}
