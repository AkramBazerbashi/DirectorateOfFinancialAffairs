import { ITBLShamelDocumentType } from "./ITBLShamelDocumentType";
import { TBLShamelSuddenHoliday } from "./TBLShamelSuddenHoliday";

export interface TBLShamelSCSuddenHoliday {
    id?: number;
    serial?: number;
    duration?: number;
    startdate?: Date;
    enddate?: Date;
    suddenholiday_id?: number;
    notes?: string;
    documenttype_id?: number;
    document_number?: string;
    documentdate?: Date;
    enterusername?: string;
    enterdate?: Date;
    entertime?: string;
    modifyusername?: string;
    modifydate?: Date;
    modifytime?: string;
    TBLShamelSuddentHolidy ?:TBLShamelSuddenHoliday;
    TBLShamelDocumentType?:ITBLShamelDocumentType;
}