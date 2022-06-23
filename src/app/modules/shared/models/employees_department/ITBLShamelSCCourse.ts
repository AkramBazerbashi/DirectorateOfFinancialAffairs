export class ITBLShamelSCCourse {

    serial: number   ;
    id :number   ;
    course_id: number   ;
    specification_id:number   ;
    country_id :number   ;
    city_id :number   ;
    startdate: string   ;
    enddate:string   ;
    studyduration:string   ;
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
    course_name:string   ;
    specification_name:string   ;
    country_name:string   ;
    state_name:string   ;

    public init()
    {
        this.serial = -1  ;
        this.id = 0;
        this.course_id=0  ;
        this.studyduration =''  ;        
        this.specification_id=-1  ;
        this.country_id=-1  ;
        this.city_id=-1;
        this.course_name=''  ;
        this.specification_name=''  ;
        this.country_name=''  ;
        this.state_name=  ''  ;
        this.enterusername=  ''  ;
        this.edate= ''  ;
        this.etime=  ''  ;
        this.mdate=  ''  ;
        this.mtime =  '';
        this.modifyusername=  '' ;
    }

}