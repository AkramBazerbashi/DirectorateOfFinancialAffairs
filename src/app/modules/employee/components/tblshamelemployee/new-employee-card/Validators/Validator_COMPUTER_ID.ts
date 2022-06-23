import {AbstractControl,AsyncValidatorFn,ValidationErrors,} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TBLShamelEmployee } from '../../../../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../../../../shared/services/employees_department/employee-service.service';

export function Validator_COMPUTER_ID( empService:EmployeeServiceService,
                                    id:number|undefined) : AsyncValidatorFn
{
        return (control: AbstractControl)
            : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

            let value_From_Control: string = control.value;
            if (!value_From_Control ||
                value_From_Control.length == 0
            )
                return new Promise(
                    resolve => {
                        null
                    });


            return empService.
                Check_COMPUTER_ID(value_From_Control, id).
                pipe(
                    map(
                        (emps: TBLShamelEmployee[]) => {
                            return (emps && emps.length > 0) ? { "mobNumExists": true } : null;
                        }
                    ));
        };
    }
