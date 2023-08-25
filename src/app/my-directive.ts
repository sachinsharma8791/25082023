import {Directive ,ElementRef} from '@angular/core'
@Directive({
    selector:"[mydir]"
})
export class myDirective{
     constructor (private elementRef:ElementRef){
        this.elementRef.nativeElement.style.color = "red";
     }
}
