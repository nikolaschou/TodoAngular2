import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoAngular2} from 'todo-angular-2';

@Component({
  selector: 'main'
})

@View({
  directives: [TodoAngular2],
  template: `
    <todo-angular-2></todo-angular-2>
  `
})

class Main {

}

bootstrap(Main);
