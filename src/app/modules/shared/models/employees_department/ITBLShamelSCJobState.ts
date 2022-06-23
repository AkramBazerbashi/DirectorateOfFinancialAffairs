export class ITBLShamelSCJobState {
    serial : number  ;
    id : number  ;
    changedate:string  ;
    changereason_id :number  ;
    documenttype_id:string  ;
    doc_number:string  ;
    doc_date:string  ;
    department_id:number;
    jobname_id:number;
    jobkind_id:number  ;
    class_id:number  ;
    salary:number  ;
    begindate:string;
    prevserial:number;
    enterusername:string   ;
    enterdate:string   ;
    entertime:string   ;
    modifyusername:string   ;
    modifydate:string   ;
    modifytime:string   ;
    edate: string  ;
    etime:  string  ;
    mdate:  string  ;
    mtime :  string ;
    changereason_name:  string ;
    documenttype_name:  string ;
    department_name:  string ;
    jobname_name:  string ;
    jobkind_name:  string ;
    class_name:  string ;

    public init()
    {
        this.serial =-1;
        this.id =-1;
        this.changedate='';
        this.changereason_id =-1;
        this.documenttype_id='';
        this.doc_number='';
        this.doc_date=''
        this.department_id=-1;
        this.jobname_id=-1;
        this.jobkind_id=-1;
        this.class_id=-1;
        this.salary=0;
        this.begindate='';
        this.prevserial=0;
        this.enterusername='';
        this.enterdate='';
        this.entertime='';
        this.modifyusername='';
        this.modifydate='';
        this.modifytime='';
        this.edate='';
        this.etime='';
        this.mdate='' ;
        this.mtime ='' ;
        this.enterusername=  ''  ;
        this.edate= ''  ;
        this.etime=  ''  ;
        this.mdate=  ''  ;
        this.mtime =  '';
        this.modifyusername=  '' ;
    }

}

	
	
