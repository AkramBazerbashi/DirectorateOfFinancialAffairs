

import { TBLShamelBonusService } from './tblshamel-bonus.service';
import { TBLShamelBonusReasonService } from './tblshamel-bonus-reason.service';
import { TBLShamelSCCancelPunishmentService } from './tblshamel-sccancel-punishment.service';
import { TBLShamelPunishmentService } from './tblshamel-punishment.service';
import { TBLShamelPunishmentReasonService } from './tblshamel-punishment-reason.service';

import { Injectable } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { TBLShamelCertificateService } from './tblshamel-certificate.service';
import { TblshamelchangereasonService } from './tblshamelchangereason.service';
import { TblshamelclassService } from './tblshamelclass.service';
import { TblshamelcountryService } from './tblshamelcountry.service';
import { TblshameldepartmentService } from './tblshameldepartment.service';
import { TblshameldocumenttypeService } from './tblshameldocumenttype.service';
import { TblshamelincmarsoomService } from './tblshamelincmarsoom.service';
import { TblshameljobkindService } from './tblshameljobkind.service';
import { TblshameljobnameService } from './tblshameljobname.service';
import { TblshamelmalakstateService } from './tblshamelmalakstate.service';
import { TblshamelrankService } from './tblshamelrank.service';
import { TblshamelspecificationService } from './tblshamelspecification.service';
import { TblshamelstateService } from './tblshamelstate.service';
import { TblshamelyearService } from './tblshamelyear.service';




import { IEmployeeNameList } from "../../models/employees_department/IEmployeeNameList";
import { ITBLShamelBonus } from '../../models/employees_department/ITBLShamelBonus';
import { ITBLShamelBonusReason } from '../../models/employees_department/ITBLShamelBonusReason';
import { ITBLShamelCertificate } from "../../models/employees_department/ITBLShamelCertificate";
import { ITBLShamelChangeReason } from "../../models/employees_department/ITBLShamelChangeReason";
import { ITBLShamelClass } from "../../models/employees_department/ITBLShamelClass";
import { ITBLShamelCountry } from "../../models/employees_department/ITBLShamelCountry";
import { ITBLShamelCourse } from "../../models/employees_department/ITBLShamelCourse";
import { ITBLShamelDepartment } from "../../models/employees_department/ITBLShamelDepartment";
import { ITBLShamelDocumentType } from "../../models/employees_department/ITBLShamelDocumentType";
import { ITBLShamelIncMarsoom } from "../../models/employees_department/ITBLShamelIncMarsoom";
import { ITBLShamelJobKind } from "../../models/employees_department/ITBLShamelJobKind";
import { ITBLShamelJobName } from "../../models/employees_department/ITBLShamelJobName";
import { ITBLShamelMalakState } from "../../models/employees_department/ITBLShamelMalakState";
import { ITBLShamelPunishment } from '../../models/employees_department/ITBLShamelPunishment';
import { ITBLShamelPunishmentReason } from '../../models/employees_department/ITBLShamelPunishmentReason';
import { ITBLShamelRank } from "../../models/employees_department/ITBLShamelRank";
import { ITBLShamelSpecification } from "../../models/employees_department/ITBLShamelSpecification";
import { ITBLShamelState } from "../../models/employees_department/ITBLShamelState";
import { ITBLShamelYear } from "../../models/employees_department/ITBLShamelYear";
import { ITBLShamelFreeHolidayReason } from '../../models/employees_department/ITBLShamelFreeHolidayReason';
import { TBLShamelSex } from '../../models/employees_department/TBLShamelSex';
import { TBLShamelMartialState } from '../../models/employees_department/TBLShamelMartialState';
import { TBLShamelArea } from '../../models/employees_department/TBLShamelArea';
import { TBLShamelMiniArea } from '../../models/employees_department/TBLShamelMiniArea';
import { TBLShamelStreetOrVillage } from '../../models/employees_department/TBLShamelStreetOrVillage';
import { TBLShamelSexService } from './tblshamel-sex.service';
import { TBLShamelMartialStateService } from './tblshamel-martial-state.service';
import { TBLShamelAreaService } from './tblshamel-area.service';
import { TBLShamelMiniAreaService } from './tblshamel-mini-area.service';
import { TBLShamelStreetOrVillageService } from './tblshamel-street-or-village.service';
import { TBLShamelNationality } from '../../models/employees_department/TBLShamelNationality';
import { TBLShamelNationalityService } from './tblshamel-nationality.service';


@Injectable({
    providedIn: 'root'
  })

export class IGlobalEmployeeList {

    public static TBLShamelSexList:TBLShamelSex[]=[];
    public static TBLShamelMartialStateList:TBLShamelMartialState[]=[];
    public static TBLShamelAreaList:TBLShamelArea[]=[];
    public static TBLShamelMiniAreaList:TBLShamelMiniArea[]=[];
    public static TBLShamelStreetOrVillageList:TBLShamelStreetOrVillage[]=[];
    public static TBLShamelNationalityList:TBLShamelNationality[]=[];


    public static EmployeeNameList :IEmployeeNameList []=[];
    public static TBLShamelChangeReasonList : ITBLShamelChangeReason[]=[];
    public static TBLShamelCertificateList : ITBLShamelCertificate[]=[];
    public static TBLShamelClassList:ITBLShamelClass []=[];
    public static TBLShamelCountryList:ITBLShamelCountry[]=[];
    public static TBLShamelCourseList:ITBLShamelCourse[]=[];
    public static TBLShamelDepartmentList:ITBLShamelDepartment[]=[];
    public static TBLShamelDocumentTypeList:ITBLShamelDocumentType[]=[];
    public static TBLShamelIncMarsoomList:ITBLShamelIncMarsoom[]=[];
    public static TBLShamelMalakStateList:ITBLShamelMalakState[]=[];
    public static TBLShamelSpecificationList:ITBLShamelSpecification[]=[];  
    public static TBLShamelYearList:ITBLShamelYear[]=[];
    public static TBLShamelStateList:ITBLShamelState[]=[];
    public static TBLShamelRankList:ITBLShamelRank[]=[];
    public static TBLShamelJobNameList:ITBLShamelJobName[]=[];
    public static TBLShamelJobKindList:ITBLShamelJobKind[]=[];

    public static TBLShamelPunishmentReasonList:ITBLShamelPunishmentReason[]=[];
    public static TBLShamelPunishmentList:ITBLShamelPunishment[]=[];
    public static TBLShamelBonusReasonList:ITBLShamelBonusReason[]=[];
    public static TBLShamelBonusList:ITBLShamelBonus[]=[];


    public static TBLShamelFreeHolidayReasonList:ITBLShamelFreeHolidayReason[]=[];


    constructor(
        public  TBLShamelSex_Service:TBLShamelSexService ,
        public  TBLShamelMartialState_Service:TBLShamelMartialStateService ,
        public  TBLShamelArea_Service:TBLShamelAreaService ,
        public  TBLShamelMiniArea_Service:TBLShamelMiniAreaService ,
        public  TBLShamelStreetOrVillage_Service:TBLShamelStreetOrVillageService ,        
        public  EmployeeService :EmployeeServiceService,
        public CertificateService :TBLShamelCertificateService,        
        public shamelcountryService :TblshamelcountryService,
        public shamelyearService : TblshamelyearService,
        public shamelstateService:TblshamelstateService,
        public shamelspecificationService:TblshamelspecificationService,
        public shamelrankService:TblshamelrankService,
        public shamelmalakstateService:TblshamelmalakstateService,
        public shameljobnameService:TblshameljobnameService,
        public shameljobkindService:TblshameljobkindService,
        public shamelincmarsoomService:TblshamelincmarsoomService,
        public shameldocumenttypeService:TblshameldocumenttypeService,
        public shameldepartmentService:TblshameldepartmentService  ,            
        public shamelclassService:TblshamelclassService,
        public shamelchangereasonService:TblshamelchangereasonService,
        public ShamelCertificateService:TBLShamelCertificateService,
        public ShamelPunishmentReasonService:TBLShamelPunishmentReasonService,
        public ShamelPunishmentService:TBLShamelPunishmentService,
        public ShamelBonusReasonService:TBLShamelBonusReasonService,
        public ShamelBonusService:TBLShamelBonusService,
        public  ShamelNationalityService:TBLShamelNationalityService
        )
        {

        }
        

        public  Fill_ShamelNationlityList()
        {
            try{
                this.ShamelNationalityService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelNationalityList = res;
                        console.log('Fill_ShamelNationlityList');
                    }
                  );                
            }catch(Exception:any)
            {
                console.log(Exception);
            }
        }



        public  Fill_TBLShamelSex()
        {
            try{
                this.TBLShamelSex_Service.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelSexList = res;
                        console.log('Fill_TBLShamelSex');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }


        public  Fill_TBLShamelMartialState()
        {
            try{
                this.TBLShamelMartialState_Service.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelMartialStateList = res;
                        console.log('Fill_TBLShamelSex');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }

        public  Fill_TBLShamelArea()
        {
            try{
                this.TBLShamelArea_Service.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelAreaList = res;
                        console.log('Fill_TBLShamelSex');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }

        public  Fill_TBLShamelMiniArea()
        {
            try{
                this.TBLShamelMiniArea_Service.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelMiniAreaList = res;
                        console.log('Fill_TBLShamelMiniArea');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }

        public  Fill_TBLShamelStreetOrVillage()
        {
            try{
                this.TBLShamelStreetOrVillage_Service.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelStreetOrVillageList = res;
                        console.log('Fill_TBLShamelSex');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }


      

        public  Fill_ChangeResason()
        {
            try{
                this.shamelchangereasonService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelChangeReasonList = res;
                        console.log('Change REsaon');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }


        public  Fill_PunishmentReasonList()
        {
            try{
                this.ShamelPunishmentReasonService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelPunishmentReasonList = res;
                        console.log('Fill_PunishmentReasonList');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }

        public  Fill_PunishmentList()
        {
            try{
                this.ShamelPunishmentService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelPunishmentList = res;
                        console.log('Fill_PunishmentList');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }

        public  Fill_ShamelBonusReasonList()
        {
            try{
                this.ShamelBonusReasonService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelBonusReasonList = res;
                        console.log('Fill_ShamelBonusReasonList');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }


        }

        public  Fill_ShamelBonusList()
        {
            try{
                this.ShamelBonusService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelBonusList = res;
                        console.log('Fill_ShamelBonusList');
                    }
                  );
                
            }catch(Exception:any)
            {
                console.log(Exception);
            }

        }




        public  Fill_EmployeeName()
        {
            try{
                this.EmployeeService.getEmpFullName("").toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.EmployeeNameList = res;
                        console.log('Fill_EmployeeName');
                    }
                  );
                
            }catch(Exception:any)
            {

            }


        }
        
        public  Fill_Certificate()
        {
            try{
                this.CertificateService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelCertificateList = res;
                        console.log('Fill_Certificate');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelClass()
        {
            try{
                this.shamelclassService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelClassList = res;
                        console.log('Fill_TBLShamelClass');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelCountry()
        {
            try{
                this.shamelcountryService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelCountryList = res;
                        console.log('Fill_TBLShamelCountry');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelYear()
        {
            try{
                this.shamelyearService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelYearList = res;
                        console.log('Fill_TBLShamelYear');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelDepartment()
        {
            try{
                this.shameldepartmentService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelDepartmentList = res;
                        console.log('Fill_TBLShamelDepartment');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelDocumentType()
        {
            try{
                this.shameldocumenttypeService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelDocumentTypeList = res;
                        console.log('Fill_TBLShamelDocumentType');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelIncMarsoom()
        {
            try{
                this.shamelincmarsoomService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelIncMarsoomList = res;
                        console.log('Fill_TBLShamelIncMarsoom');
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelMalakState()
        {
            try{
                this.shamelmalakstateService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelMalakStateList = res;
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelSpecification()
        {
            try{
                this.shamelspecificationService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelSpecificationList = res;
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelState()
        {
            try{
                this.shamelstateService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelStateList = res;
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelRank()
        {
            try{
                this.shamelrankService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelRankList = res;
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }
       

        public  Fill_TBLShamelJobName()
        {
            try{
                this.shameljobnameService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelJobNameList = res;
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }

        public  Fill_TBLShamelJobKind()
        {
            try{
                this.shameljobkindService.list().toPromise().then(
                    (res :any) => { // Success
                        IGlobalEmployeeList.TBLShamelJobKindList = res;
                    }
                  );
                
            }catch(Exception:any)
            {
            }
        }
     
        public Fill ()
        {
            this.Fill_TBLShamelSex() ;          
    
    
              this.Fill_TBLShamelMartialState();
           
    
              this.Fill_TBLShamelArea();
            
    
              this.Fill_TBLShamelMiniArea();
           
    
              this.Fill_TBLShamelStreetOrVillage();
           

            this.Fill_PunishmentReasonList();
            this.Fill_PunishmentList();
            this.Fill_ShamelBonusList();
            this.Fill_ShamelBonusReasonList();
            this.Fill_ChangeResason();

            this.Fill_EmployeeName();
            this.Fill_Certificate();
            this.Fill_TBLShamelClass();
            this.Fill_TBLShamelCountry();
            this.Fill_TBLShamelYear();
            this.Fill_TBLShamelDepartment();
            this.Fill_TBLShamelDocumentType();
            this.Fill_TBLShamelIncMarsoom();
            this.Fill_TBLShamelSpecification();
            this.Fill_TBLShamelJobKind();
            this.Fill_TBLShamelJobName();
            this.Fill_TBLShamelJobName();
            this.Fill_ShamelNationlityList();
        }
     
}