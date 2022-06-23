export class ITBLShamelSCCancelPunishment {

    
    serial_punishment: number   ;
    serial: number   ;
    id :number   ;
    punishment_id: number   ;
    reason_id:number   ;
    documenttype_id :number   ;   
    document_number: string   ;
    documentdate:string   ;   
    enterusername:string   ;
    enterdate:string   ;
    entertime:string   ;
    modifyusername:string   ;
    modifydate:string   ;
    modifytime:string   ;
    edate:string   ;
    etime:string   ;
    mdate:string   ;
    mtime:string   ;
    bonusreason_name:string   ;
    bonus_name:string   ;
    documenttype_name:string   ;
    is_cancel : string;

    public init()
    {
        this.serial = -1  ;
        this.id = 0;
        this.punishment_id=0  ;
        this.reason_id =0  ;        
        this.documenttype_id=0  ;
        this.document_number=''  ;
        this.documentdate='';       
        this.bonusreason_name=''  ;
        this.bonus_name=''  ;
        this.documenttype_name=  ''  ;
        this.enterusername=  ''  ;
        this.edate= ''  ;
        this.etime=  ''  ;
        this.mdate=  ''  ;
        this.mtime =  '';
        this.modifyusername=  '' ;
        this.is_cancel = '';
    }

}