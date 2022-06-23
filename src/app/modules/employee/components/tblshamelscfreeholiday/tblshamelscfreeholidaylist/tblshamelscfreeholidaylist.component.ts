import { TBLShamelSCFreeHolidayService } from '../../../../shared/services/employees_department/tblshamel-scfree-holiday.service';
import { ITBLShamelSCFreeHoliday } from '../../../../shared/models/employees_department/ITBLShamelSCFreeHoliday';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TblshamelscfreeholidaymodifyComponent } from '../tblshamelscfreeholidaymodify/tblshamelscfreeholidaymodify.component';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';

@Component({
  selector: 'app-tblshamelscfreeholidaylist',
  templateUrl: './tblshamelscfreeholidaylist.component.html',
  styleUrls: ['./tblshamelscfreeholidaylist.component.scss']
})
export class TblshamelscfreeholidaylistComponent   implements OnInit ,OnChanges,AfterViewInit  {
    //Join Variable   
    @Input() id:number;
  
    // List For Table
    employee_freeHoliday_List :ITBLShamelSCFreeHoliday []=[];
    selected_employee_freeHoliday :ITBLShamelSCFreeHoliday;
    displayedColumns: string[] = ['duration', 'startdate', 'enddate', 'document_number',
                                  'documentdate', 'documenttype_name','freeholidayreason_name','action'];
  
  
    // Select Object
    selected_employee_freeHoliday_Rows = new Set<ITBLShamelSCFreeHoliday>();                              
   
  
  
    constructor(public ShamelSCFreeHolidayService : TBLShamelSCFreeHolidayService,
      public dialog: MatDialog,
      private snackBar: MatSnackBar) {
        this.employee_freeHoliday_List =[];
        this.FillTable();
       }
  
       ngAfterViewInit() {

        
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
        console.log('Fill Table ID = ' + this.id); 

         if (this.id)
         {
          await this.ShamelSCFreeHolidayService.list(this.id).toPromise().then(
            (data:any)=>
            {      
              this.employee_freeHoliday_List=data;  
              console.log(this.employee_freeHoliday_List); 
                  
            }
          );
         }
  
  
  
       }catch(ex :any){}
  
  
      }
  
   
      
  
  
  
    
  
  
    Add(): void {
  
      this.selected_employee_freeHoliday =  new ITBLShamelSCFreeHoliday();
      this.selected_employee_freeHoliday.init();
  
      const dialogRef = this.dialog.open(TblshamelscfreeholidaymodifyComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_freeHoliday,id:this.id}
      });
     
      dialogRef.afterClosed().toPromise().then(result => {
       
        this.FillTable();
        
      });
    }
  
  
    async Delete(element:ITBLShamelSCFreeHoliday)
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
           
  
  
            this.ShamelSCFreeHolidayService.delete(element.serial).toPromise().then(res=> 
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
  
  
    async Update(element:ITBLShamelSCFreeHoliday)
    {
      if (element)
      {
        this.selected_employee_freeHoliday = element;
  
        const dialogRef = this.dialog.open(TblshamelscfreeholidaymodifyComponent, {
          height: '60%',
          width: '80%',
          data: {obj: this.selected_employee_freeHoliday,id:this.id}
        });
    
        dialogRef.afterClosed().toPromise().then(result => {
          this.FillTable();        
        });
  
      }
  
  
    }
  
  
  
  
  }
  