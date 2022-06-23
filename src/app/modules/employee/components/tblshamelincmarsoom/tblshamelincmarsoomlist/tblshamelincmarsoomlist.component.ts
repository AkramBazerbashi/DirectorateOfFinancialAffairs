import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TblshamelincmarsoomService } from '../../../../shared/services/employees_department/tblshamelincmarsoom.service';
import { ITBLShamelIncMarsoom } from '../../../../shared/models/employees_department/ITBLShamelIncMarsoom';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { TblshamelincmarsoommodifyComponent } from '../tblshamelincmarsoommodify/tblshamelincmarsoommodify.component';

@Component({
  selector: 'app-tblshamelincmarsoomlist',
  templateUrl: './tblshamelincmarsoomlist.component.html',
  styleUrls: ['./tblshamelincmarsoomlist.component.scss']
})
export class TblshamelincmarsoomlistComponent implements OnInit ,OnChanges  {
  //Join Variable   
 

  // List For Table
  IncMarsoom_List :ITBLShamelIncMarsoom []=[];
  selected_IncMarsoom  :ITBLShamelIncMarsoom;

  displayedColumns: string[] = [ 'changedate', 'document_number',
                                'documentdate','incpercentage','additionalvalue','begindate','changereason_name','documenttype_name' ,'action'];


  // Select Object
  selected_IncMarsoom_Rows = new Set<ITBLShamelIncMarsoom>();                              
 


  constructor(public IncMarsoomService : TblshamelincmarsoomService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    public GlobalEmployeeList:IGlobalEmployeeList ) {
      this.IncMarsoom_List =[];
      this.FillTable();
     }


  ngOnChanges() {
    this.FillTable();
   }

   
  ngOnInit(): void { 
  }



    public async FillTable()
    {
     try{
       if (IGlobalEmployeeList.TBLShamelIncMarsoomList && 
        IGlobalEmployeeList.TBLShamelIncMarsoomList.length>0)
       {
        this.IncMarsoom_List=IGlobalEmployeeList.TBLShamelIncMarsoomList;                   
       }
       else
       {
        this.IncMarsoomService.list().toPromise().then(
          (data:any)=>
          {      
            this.IncMarsoom_List=data;                   
          }
        );
       }


       
     }catch(ex :any){}
    }

 
    



  


  Add(): void {

    this.selected_IncMarsoom =  new ITBLShamelIncMarsoom();
    this.selected_IncMarsoom.init();


    const dialogRef = this.dialog.open(TblshamelincmarsoommodifyComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_IncMarsoom}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }


  async Delete(element:ITBLShamelIncMarsoom)
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
         


          this.IncMarsoomService.delete(element.incmarsoom_id).toPromise().then(res=> 
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


  async Update(element:ITBLShamelIncMarsoom)
  {
    if (element && element.incmarsoom_id >0)
    {
      this.selected_IncMarsoom = element;

      const dialogRef = this.dialog.open(TblshamelincmarsoommodifyComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_IncMarsoom}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
