import { VShamelOvertimeEmpService } from "./VShamelOvertimeEmpService";

import { TBLShamelOverTimeShateb } from "./TBLShamelOverTimeShateb";

export interface TBLShamelOvertimeEmployee {
    serial?: number,
    fname?: string,
    lname?: string,
    father?: string,
    mother?: string,
    birthdate?: Date,
    sex_name?: string,
    servicedayes?: number,
    EnterUserName?: string,
    enterdate?: string,
    entertime?: string,
    modifyusername?: string,
    modifydate?: string,
    modifytime?: string,
    primaryKey?: number,
    VShamelOvertimeEmpService?:VShamelOvertimeEmpService,
    TBLShamelOverTimeShateb?:TBLShamelOverTimeShateb

}
