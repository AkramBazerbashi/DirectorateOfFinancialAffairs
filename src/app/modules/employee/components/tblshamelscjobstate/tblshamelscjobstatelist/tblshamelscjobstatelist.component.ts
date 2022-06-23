import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ITBLShamelSCJobState } from '../../../../shared/models/employees_department/ITBLShamelSCJobState';
import { TblshamelscjobstateService } from '../../../../shared/services/employees_department/tblshamelscjobstate.service';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { TblshamelscjobstatemodifyComponent } from '../tblshamelscjobstatemodify/tblshamelscjobstatemodify.component';

@Component({
  selector: 'app-tblshamelscjobstatelist',
  templateUrl: './tblshamelscjobstatelist.component.html',
  styleUrls: ['./tblshamelscjobstatelist.component.scss']
})
export class TblshamelscjobstatelistComponent implements OnInit,AfterViewInit  ,OnChanges  {
  //Join Variable   
  @Input() id:number;

  // List For Table
  employee_JobState_List :ITBLShamelSCJobState []=[];
  dataSource = new MatTableDataSource<ITBLShamelSCJobState>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  selected_employee_JobState :ITBLShamelSCJobState;
  displayedColumns: string[] = [
    'department_name','jobname_name','jobkind_name',
    'class_name','salary','begindata',
    'changedate', 'changereason_name', 'documenttype_name',                                  
    'doc_number','doc_date',
    'action'];

                               
  // Select Object
  selected_employee_JobState_Rows = new Set<ITBLShamelSCJobState>();                              
 


  constructor(public jobStateService : TblshamelscjobstateService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_JobState_List =[];
     
     }


  ngOnChanges() {
   
    this.FillTable();
   }

   
  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.FillTable();
  }



    public async FillTable()
    {
     try{
       if (this.id)
       {
        this.jobStateService.list(this.id).toPromise().then(
          (data:any)=>
          {      
            this.employee_JobState_List=data; 
            this.dataSource = new MatTableDataSource<ITBLShamelSCJobState>(this.employee_JobState_List);            
            this.dataSource.paginator = this.paginator; 

            

                
          }
        );
       }



     }catch(ex :any){
       console.log(ex);

     }


    }

 
    



  


  Add(): void {
    console.log("ADD");
    
    console.log(this.employee_JobState_List );

    this.selected_employee_JobState =  new ITBLShamelSCJobState();
    this.selected_employee_JobState.init();
    this.selected_employee_JobState.id = this.id;

    if (this.employee_JobState_List && this.employee_JobState_List.length >0)
      {
        let last_employee_JobState:ITBLShamelSCJobState = this.employee_JobState_List[this.employee_JobState_List.length-1];
        console.log("dsds");
        console.log(last_employee_JobState);
        if (last_employee_JobState )
        {
          this.selected_employee_JobState.id = this.id;
          this.selected_employee_JobState.department_id = last_employee_JobState.department_id;
          this.selected_employee_JobState.jobname_id = last_employee_JobState.jobname_id;
          this.selected_employee_JobState.jobkind_id = last_employee_JobState.jobkind_id;
          this.selected_employee_JobState.class_id = last_employee_JobState.class_id;

          console.log("Copy ");
          console.log(this.selected_employee_JobState);

        }


      }

    const dialogRef = this.dialog.open(TblshamelscjobstatemodifyComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_JobState,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }


  async Delete(element:ITBLShamelSCJobState)
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
         


          this.jobStateService.delete(element.serial).toPromise().then(res=> 
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
}catch(ex :any){
  console.log(ex);
}

  }


  async Update(element:ITBLShamelSCJobState)
  {

    if (element)
    {
      this.selected_employee_JobState = element;
      console.log(this.selected_employee_JobState);

      const dialogRef = this.dialog.open(TblshamelscjobstatemodifyComponent, {
        height: '80%',
        width: '80%',
        data: {obj: this.selected_employee_JobState,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
