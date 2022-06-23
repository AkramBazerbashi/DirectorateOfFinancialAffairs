import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ITBLShamelSCEducation } from '../../../../shared/models/employees_department/ITBLShamelSCEducation';
import { TblshamelsceducationService } from '../../../../shared/services/employees_department/tblshamelsceducation.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TblshamelsceducationmodifyComponent } from '../tblshamelsceducationmodify/tblshamelsceducationmodify.component';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';

@Component({
  selector: 'app-tblshamelsceducationlist',
  templateUrl: './tblshamelsceducationlist.component.html',
  styleUrls: ['./tblshamelsceducationlist.component.scss']
})
export class TblshamelsceducationlistComponent implements OnInit ,OnChanges  {
  //Join Variable   
  @Input() id:number;

  // List For Table
  employee_education_List :ITBLShamelSCEducation []=[];
  selected_employee_education :ITBLShamelSCEducation;
  displayedColumns: string[] = ['certificate_name', 'specification_name', 'graduationyear', 'country_name',
                                'state_name', 'rank_name','studyduration','action'];


  // Select Object
  selected_employee_education_Rows = new Set<ITBLShamelSCEducation>();                              
 


  constructor(public educationService : TblshamelsceducationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_education_List =[];

      this.FillTable();
     }


  ngOnChanges() {
    console.log("ngOnChanges Eduction");
    console.log(this.id);
    this.FillTable();
   }

   
  ngOnInit(): void {

   


    
    
   

    
  }



    public async FillTable()
    {
     try{
       if (this.id)
       {
        this.educationService.list(this.id).toPromise().then(
          (data:any)=>
          {      
            this.employee_education_List=data;   
                
          }
        );
       }else
       {
        this.educationService.list(-1).toPromise().then(
          (data:any)=>
          {      
            this.employee_education_List=data;   
                
          }
        );
       }



     }catch(ex :any){}


    }

 
    



  


  Add(): void {

    this.selected_employee_education =  new ITBLShamelSCEducation();
    this.selected_employee_education.init();

    const dialogRef = this.dialog.open(TblshamelsceducationmodifyComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_education,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }


  async Delete(element:ITBLShamelSCEducation)
  {
    
try{
      const dialogRef = this.dialog.open(ConfirmationdialogComponent,{
        data:{
          message: 'هل أنت متأكد من الحذف?',
          buttonText: {
            ok: 'نعم',
            cancel: 'لا'
          }
        }
      });

      

      dialogRef.afterClosed().toPromise().then((confirmed: boolean) => {
        if (confirmed) {
     
          const snack = this.snackBar.open('سوف يتم الآن الحذف');
         


          this.educationService.delete(element.serial).toPromise().then(res=> 
            {
              snack.dismiss();

              console.log(res);
              if (res==1)
                this.FillTable();

            });
            this.snackBar.open('تم الحذف', 'Fechar', {
              duration: 2000,
            });

            this.snackBar.dismiss();
 
         
        }
      });
}catch(ex:any)  
{

}

  }


  async Update(element:ITBLShamelSCEducation)
  {
    if (element)
    {
      this.selected_employee_education = element;

      const dialogRef = this.dialog.open(TblshamelsceducationmodifyComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_education,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
