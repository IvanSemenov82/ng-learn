import { Component } from '@angular/core';

// todo: bootstrap

@Component({
  selector: 'app-root',
  // ng поддерживает ещё 2 вида задания селекторов
  // через атрибут [app-root]
  // через класс '.app-root'
  templateUrl: './app.component.html',
  // template
  // `` - можем шаблон описывать в обратных кавычках
  styleUrls: ['./app.component.css']
  // styles
  // [``] массив с перечислением свойств CSS
})
export class AppComponent {
  title = 'ng-learn';
}
