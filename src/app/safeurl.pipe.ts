import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {
  constructor(private Dom:DomSanitizer){}
  transform(value: any): any {
    return this.Dom.bypassSecurityTrustResourceUrl(value);
  }

}
