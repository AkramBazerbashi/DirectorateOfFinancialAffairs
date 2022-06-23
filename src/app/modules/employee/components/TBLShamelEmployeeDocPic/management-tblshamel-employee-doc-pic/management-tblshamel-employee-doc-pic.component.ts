import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { TBLShamelEmployeeDocPic } from '../../../../shared/models/employees_department/TBLShamelEmployeeDocPic';
import { TBLShamelEmployeeDocPicService } from '../../../../shared/services/employees_department/tblshamel-employee-doc-pic.service';

@Component({
  selector: 'app-management-tblshamel-employee-doc-pic',
  templateUrl: './management-tblshamel-employee-doc-pic.component.html',
  styleUrls: ['./management-tblshamel-employee-doc-pic.component.scss']
})
export class ManagementTBLShamelEmployeeDocPicComponent implements OnInit {

  
  //Link To Employee 
  id:number;
 
  Selected_Employee :TBLShamelEmployee;
  ShamelEmployeeDocPic_List:TBLShamelEmployeeDocPic[];
  Selected_EmployeeDocPic:TBLShamelEmployeeDocPic;
  ID : number;    
  index :number;
  image :any;
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: {obj: TBLShamelEmployee,id:number},
  public EmployeeDocPic_Service:TBLShamelEmployeeDocPicService,
  public sanitizer: DomSanitizer) {this.index =0;
    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee = data.obj;
    }
  
    this.FillArrayUsingService();   
   }

   public  FillArrayUsingService()
   {
     try{      
       this.Selected_EmployeeDocPic.DocImg
         if(this.Selected_Employee && this.Selected_Employee.id >0)
         {         
        this.EmployeeDocPic_Service.list(this.Selected_Employee.id).subscribe(
          (data:any)=> {

            this.ShamelEmployeeDocPic_List=data;  

            if (this.ShamelEmployeeDocPic_List &&
              this.ShamelEmployeeDocPic_List.length > 0)
              {
                this.index=0;
                this.Selected_EmployeeDocPic = this.ShamelEmployeeDocPic_List[this.index];
                let objectURL = 'data:image/png;base64,' + this.Selected_EmployeeDocPic.DocImg;
                this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

              }            
          });
        }    
     }catch(Exception : any)
     {}
   }

  ngOnInit(): void {
  }
    
}
