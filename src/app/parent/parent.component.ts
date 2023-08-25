import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  varParent = 'value in parent'
  outputVarInParent ='0'

  valchange(val:any){
    this.outputVarInParent=val

  }

}
