import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'myPipe',
    pure:true
})
export class Mypipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return "my pipe work"
    }
}