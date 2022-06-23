export class ITBLShamelSCHealthHoliday
{
    id:number;	
    serial:number;
    duration:number;	
    startdate:string;
    enddate:string;
    sick:string;
    doctor_id:number;	
    documenttype_id:number;	
    document_number:string
    documentdate:string	;
    enterusername:string;
    enterdate:string	;
    entertime:string	;
    modifyusername:string	;
    modifydate:string	;
    modifytime:string	;


    public constructor()
    {
        this.serial =-1;
        this.id =-1;
        this.duration=0;
        this.startdate ='';
        this.enddate ='';
        this.sick ='';
        this.doctor_id =0;
        this.documenttype_id =0;
        this.document_number ='';
        this.documentdate ='';
        this.enterusername ='';
        this.enterdate ='';
        this.entertime ='';
        this.modifyusername ='';
        this.modifydate ='';
        this.modifytime ='';
    }
}