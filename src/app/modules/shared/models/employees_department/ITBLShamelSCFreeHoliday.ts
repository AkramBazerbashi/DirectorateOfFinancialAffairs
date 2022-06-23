export class ITBLShamelSCFreeHoliday {
    serial : number  ;
    id : number  ;
    duration:number  ;
    startdate :string  ;
    enddate :string  ;
    reason_id:number  ;
    documenttype_id:number  ;    
    document_number:string  ;
    documentdate:string  ;
    documenttype_name:string  ;
    freeholidayreason_name:  string  ;   
    enterusername:  string  ;
    edate: string  ;
    etime:  string  ;
    mdate:  string  ;
    mtime :  string ;
    modifyusername:  string  ;

    public init()
    {
        this.serial = -1  ;
        this.id = this.id;
        this.duration=0  ;
        this.reason_id=0;
        this.documenttype_id=0;
        this.document_number =''  ;
       
        this.startdate=''  ;
        this.enddate=''  ;
        this.documentdate=''  ;
        this.documenttype_name = '';
        this.freeholidayreason_name = '';
        this.enterusername=  ''  ;
        this.edate= ''  ;
        this.etime=  ''  ;
        this.mdate=  ''  ;
        this.mtime =  '';
        this.modifyusername=  '' ;
    }

}
