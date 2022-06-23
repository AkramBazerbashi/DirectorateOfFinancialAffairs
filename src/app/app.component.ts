import { Component } from '@angular/core';
import { IGlobalEmployeeList } from './modules/shared/services/employees_department/IGlobalEmployeeList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alshamel';

  constructor(public GlobalEmployeeList : IGlobalEmployeeList)
  {
    /*
    try{
      GlobalEmployeeList.Fill();

    }catch
    {}
*/

    
  }
}
