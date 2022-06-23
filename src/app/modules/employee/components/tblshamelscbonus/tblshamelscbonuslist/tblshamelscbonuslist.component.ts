import { TblshamelscbonusmodifyComponent } from './../tblshamelscbonusmodify/tblshamelscbonusmodify.component';
import { TBLShamelSCBonusService } from '../../../../shared/services/employees_department/tblshamel-scbonus.service';
import { ITBLShamelSCBonus } from '../../../../shared/models/employees_department/ITBLShamelSCBonus';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';

@Component({
  selector: 'app-tblshamelscbonuslist',
  templateUrl: './tblshamelscbonuslist.component.html',
  styleUrls: ['./tblshamelscbonuslist.component.scss']
})
export class TblshamelscbonuslistComponent  implements OnInit ,OnChanges  {
  //Join Variable   
  @Input() id:number;

  // List For Table
  employee_Bonus_List :ITBLShamelSCBonus []=[];
  selected_employee_Bonus :ITBLShamelSCBonus;
  displayedColumns: string[] = ['bonus_name', 'bonusreason_name', 'documenttype_name', 'document_number',
                                'documentdate', 'documenttype_name','action'];


  // Select Object
  selected_employee_Bonus_Rows = new Set<ITBLShamelSCBonus>();                              
 


  constructor(public ShamelSCFreeHolidayService : TBLShamelSCBonusService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_Bonus_List =[];
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
        this.ShamelSCFreeHolidayService.list(this.id).toPromise().then(
          (data:any)=>
          {      
            this.employee_Bonus_List=data;   
                
          }
        );
       }



     }catch(ex :any){}


    }

 
    



  


  Add(): void {

    this.selected_employee_Bonus =  new ITBLShamelSCBonus();
    this.selected_employee_Bonus.init();
    this.selected_employee_Bonus.id = this.id;

    const dialogRef = this.dialog.open(TblshamelscbonusmodifyComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_Bonus,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }


  async Delete(element:ITBLShamelSCBonus)
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


  async Update(element:ITBLShamelSCBonus)
  {
    if (element)
    {
      this.selected_employee_Bonus = element;
      console.log(this.selected_employee_Bonus);

      const dialogRef = this.dialog.open(TblshamelscbonusmodifyComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_Bonus,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
