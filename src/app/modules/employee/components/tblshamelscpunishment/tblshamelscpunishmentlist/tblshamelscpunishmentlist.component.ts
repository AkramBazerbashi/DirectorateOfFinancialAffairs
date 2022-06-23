import { TblshamelscpunishmentmodifyComponent } from './../tblshamelscpunishmentmodify/tblshamelscpunishmentmodify.component';
import { TBLShamelSCPunishmentService } from '../../../../shared/services/employees_department/tblshamel-scpunishment.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { ITBLShamelSCPunishment } from '../../../../shared/models/employees_department/ITBLShamelSCPunishment';
import { ITBLShamelSCCancelPunishment } from '../../../../shared/models/employees_department/ITBLShamelSCCancelPunishment';

@Component({
  selector: 'app-tblshamelscpunishmentlist',
  templateUrl: './tblshamelscpunishmentlist.component.html',
  styleUrls: ['./tblshamelscpunishmentlist.component.scss']
})
export class TblshamelscpunishmentlistComponent implements OnInit ,OnChanges  {
  //Join Variable   
  @Input() id:number;

  // List For Table
  employee_Punishment_List :ITBLShamelSCPunishment []=[];
  selected_employee_Punishment :ITBLShamelSCPunishment;
  displayedColumns: string[] = ['document_number', 'documentdate', 'documenttype_name', 'punishment_name',
                                'punishmentreason_name', 'cancel_document_number','cancel_documentdate',
                                'cancel_documenttype_name','cancel_punishment_name','cancel_punishmentreason_name',                                
                                'action'];


  // Select Object
  selected_employee_Punishment_Rows = new Set<ITBLShamelSCPunishment>();                              
 


  constructor(public ShamelSCPunishmentService : TBLShamelSCPunishmentService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_Punishment_List =[];
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
        this.ShamelSCPunishmentService.list(this.id).toPromise().then(
          (data:any)=>
          {      
            this.employee_Punishment_List=data;   
                
          }
        );
       }



     }catch(ex :any){}


    }

 
    

    AddCancelPunshiment(element:ITBLShamelSCPunishment): void {


      this.selected_employee_Punishment =  element;

      let selected_employee_CancelPunishment =  new ITBLShamelSCCancelPunishment();
      selected_employee_CancelPunishment.init();
      selected_employee_CancelPunishment.id = this.id;
      selected_employee_CancelPunishment.serial_punishment =element.serial;
  console.log( selected_employee_CancelPunishment);


      const dialogRef = this.dialog.open(TblshamelscpunishmentmodifyComponent, {
        height: '60%',
        width: '80%',
        data: {
          Parent: this.selected_employee_Punishment,
          obj: selected_employee_CancelPunishment,id:this.id}
      });
     
      dialogRef.afterClosed().toPromise().then(result => {
       
        this.FillTable();
        
      });
    }
  

  

    


  Add(): void {

    this.selected_employee_Punishment =  new ITBLShamelSCPunishment();
    this.selected_employee_Punishment.init();
    this.selected_employee_Punishment.id = this.id;
console.log(this.selected_employee_Punishment);
    const dialogRef = this.dialog.open(TblshamelscpunishmentmodifyComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_Punishment,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }


  async Delete(element:ITBLShamelSCPunishment)
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
         


          this.ShamelSCPunishmentService.delete(element.serial).toPromise().then(res=> 
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


  async Update(element:ITBLShamelSCPunishment)
  {
    if (element)
    {
      this.selected_employee_Punishment = element;

      const dialogRef = this.dialog.open(TblshamelscpunishmentmodifyComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_Punishment,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
