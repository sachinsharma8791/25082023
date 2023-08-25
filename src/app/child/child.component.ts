import { Component ,Input,Output,OnInit,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input () inputVar = 'variable value in child'
  @Output () outputVar = new EventEmitter<string>()
  var ='value in child'

  ngOnInit(): void {

    this.outputVar.emit(this.var)
  
}



}
