import { Component, OnChanges, OnInit } from '@angular/core';
import { TBLShamelUser } from '../../../../modules/shared/models/employees_department/TBLShamelUser';
import { TBLShamelUserService } from '../../../../modules/shared/services/employees_department/tblshamel-user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TBLShamelUserEditComponent } from '../tblshamel-user-edit/tblshamel-user-edit.component';
import { ConfirmationdialogComponent } from 'src/app/modules/shared/components/confirmationdialog/confirmationdialog.component';
import { MatIcon } from '@angular/material/icon';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-tblshamel-user-list',
  templateUrl: './tblshamel-user-list.component.html',
  styleUrls: ['./tblshamel-user-list.component.scss']
})
export class TBLShamelUserListComponent implements OnInit ,OnChanges  {


  // List For Table
  public User_List :TBLShamelUser []=[];
  public selected_User :TBLShamelUser;
  public displayedColumns: string[] = ['User_ID', 'FullName', 'Daera_Name', 'UserName',
                                'HDSERIAL', 'EnterMinTime','EnterMaxTime',
                                'SEnabled','AccountCreationDate','AccountCreationTime',
                                'AccountModificationDate','AccountModificationTime',
                                'Action'];

  // Select Object
  selected_User_Rows = new Set<TBLShamelUser>();                              
 


  constructor(public ShamelUserService:TBLShamelUserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.User_List =[];
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
        this.ShamelUserService.list().toPromise().then(
          (data:any)=>
          {      
            this.User_List=data;                   
          }
        );
     }catch(ex :any){}
    }

  Add(): void {
    this.selected_User =  new TBLShamelUser();
    const dialogRef = this.dialog.open(TBLShamelUserEditComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_User}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {     
      this.FillTable();      
    });
  }


  async Delete(element:TBLShamelUser)
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
         


          this.ShamelUserService.delete(element.User_ID).toPromise().then((res :any)=> 
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


  async Update(element:TBLShamelUser)
  {
    if (element)
    {
      this.selected_User = element;

      const dialogRef = this.dialog.open(TBLShamelUserEditComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_User}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
