export class ITBLShamelSCPunishment {
    serial : number  ;
    serial_punishment : number  ;
    id : number  ;
   
    punishment_id:number  ;
    reason_id:number  ;
    documenttype_id:number  ;
    document_number:string  ;
    documentdate :string  ;
    punishmentreason_name:string  ;
    punishment_name:string  ;
    documenttype_name:string  ;
    is_cancel:  string  ;   
    enterusername:  string  ;
    edate: string  ;
    etime:  string  ;
    mdate:  string  ;
    mtime :  string ;

    modifyusername:  string  ;


    cancel_serial : number  ;

    cancel_document_id :number;
    cancel_document_number :string;
    cancel_documentdate :string;
    cancel_punishmentreason_name :string ;
    cancel_punishment_name :string ;
    cancel_documenttype_name :string ;


    public init()
    {
        this.serial = -1  ;
        this.id = this.id;
        this.punishment_id=0  ;
        this.document_number =''  ;
        this.reason_id=-1  ;
        this.documenttype_id=-1  ;       
        this.documentdate=''  ;
        this.punishmentreason_name=''  ;
        this.punishment_name=''  ;
        this.documenttype_name=  ''  ;
        this.is_cancel=  '' ;
        this.enterusername=  ''  ;
        this.edate= ''  ;
        this.etime=  ''  ;
        this.mdate=  ''  ;
        this.mtime =  '';
        this.modifyusername=  '' ;
        this.cancel_document_id =0;
        this.cancel_document_number ='';
        this.cancel_documentdate ='';
        this.cancel_punishmentreason_name ='';
        this.cancel_punishment_name ='';
        this.cancel_documenttype_name ='' ;

    }

}
