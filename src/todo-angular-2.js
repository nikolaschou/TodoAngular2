import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'todo-angular-2'
})

@View({
  templateUrl: 'todo-angular-2.html'
})

export class TodoAngular2 {

  constructor() {
    console.info('TodoAngular2 Component Mounted Successfully');
  }

}
