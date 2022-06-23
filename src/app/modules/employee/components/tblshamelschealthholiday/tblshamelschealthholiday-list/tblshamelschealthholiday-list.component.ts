import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITBLShamelSCHealthHoliday } from '../../../../shared/models/employees_department/ITBLShamelSCHealthHoliday';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { TBLShamelSCHealthHolidayService } from '../../../../shared/services/employees_department/tblshamel-schealth-holiday.service';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { TblshamelschealthholidayModifyComponent } from '../tblshamelschealthholiday-modify/tblshamelschealthholiday-modify.component';

@Component({
  selector: 'app-tblshamelschealthholiday-list',
  templateUrl: './tblshamelschealthholiday-list.component.html',
  styleUrls: ['./tblshamelschealthholiday-list.component.scss']
})
export class TblshamelschealthholidayListComponent implements OnInit {
  //Join Variable   
  @Input() employee_id :number;
  @Input() SelectedEmployee :TBLShamelEmployee;
  employee_HealthHoliday_List :ITBLShamelSCHealthHoliday []=[];

   // Select Object
   selected_employee_HealthHoliday = new ITBLShamelSCHealthHoliday();                              
  
 




  displayedColumns: string[] = [ 

  'duration',
  'startdate',
  'enddate',
  'sick',
  'doctor_name' ,
  'documenttype_id',	
  'document_number',
  'documentdate','action'];



  constructor(public ShamelSCHealthHolidayService : TBLShamelSCHealthHolidayService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {

      this.employee_HealthHoliday_List =[];
      this.FillTable();
     }
      ngAfterViewInit() {

       
     }
   
   ngOnChanges() {
   
     this.FillTable();
    }
 
    
   ngOnInit(): void {

     
   }
 
 
 
     public async FillTable()
     {
      try{


        if (this.employee_id && this.employee_id  >0) // لدي رقم الموظف
        {
         await this.ShamelSCHealthHolidayService.list(this.employee_id).subscribe(
           (data:any)=>
           {      
             this.employee_HealthHoliday_List=data;  
             
                 
           }
         );
        }
 
 
 
      }catch(ex :any){}
 
 
     }
 
  
     
 
 
 
   
 
 
   Add(): void {
 
     this.selected_employee_HealthHoliday =  new ITBLShamelSCHealthHoliday();
 
 
     const dialogRef = this.dialog.open(TblshamelschealthholidayModifyComponent, {
       height: '60%',
       width: '80%',
       data: {obj: this.selected_employee_HealthHoliday,id:this.employee_id}
     });
    
     dialogRef.afterClosed().toPromise().then(result => {
      
       this.FillTable();
       
     });
   }
 
 
   async Delete(element:ITBLShamelSCHealthHoliday)
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
          
 
 
           this.ShamelSCHealthHolidayService.delete(element.serial).toPromise().then(res=> 
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
 
 
   async Update(element:ITBLShamelSCHealthHoliday)
   {
     if (element)
     {
       this.selected_employee_HealthHoliday = element;
 
       const dialogRef = this.dialog.open(TblshamelschealthholidayModifyComponent, {
         height: '60%',
         width: '80%',
         data: {obj: this.selected_employee_HealthHoliday,id:this.employee_id}
       });
   
       dialogRef.afterClosed().toPromise().then(result => {
         this.FillTable();        
       });
 
     }
 
 
   }
 
 


}
