import { TblshamelsccourseService } from'../../../../shared/services/employees_department/tblshamelsccourse.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ITBLShamelSCCourse } from '../../../../shared/models/employees_department/ITBLShamelSCCourse';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TblshamelsccoursemodifyComponent } from '../tblshamelsccoursemodify/tblshamelsccoursemodify.component';

@Component({
  selector: 'app-tblshamelsccourselist',
  templateUrl: './tblshamelsccourselist.component.html',
  styleUrls: ['./tblshamelsccourselist.component.scss']
})
export class TblshamelsccourselistComponent   implements OnInit ,OnChanges  {
  //Join Variable   
  @Input() id:number;

  // List For Table
  employee_course_List :ITBLShamelSCCourse []=[];
  selected_employee_course :ITBLShamelSCCourse;
  displayedColumns: string[] = ['course_name', 'specification_name', 'studyduration', 'country_name',
                                'state_name','startdate','enddate' ,'action'];


  // Select Object
  selected_employee_course_Rows = new Set<ITBLShamelSCCourse>();                              
 


  constructor(public courseService : TblshamelsccourseService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_course_List =[];
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
        this.courseService.list(this.id).toPromise().then(
          (data:any)=>
          {      
            this.employee_course_List=data;                   
          }
        );
       }
     }catch(ex :any){}
    }

 
    



  


  Add(): void {

    this.selected_employee_course =  new ITBLShamelSCCourse();
    this.selected_employee_course.init();
    this.selected_employee_course.id = this.id;


    const dialogRef = this.dialog.open(TblshamelsccoursemodifyComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_course,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }


  async Delete(element:ITBLShamelSCCourse)
  {
    
try{
      const dialogRef = this.dialog.open(TblshamelsccoursemodifyComponent,{
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
         


          this.courseService.delete(element.serial).toPromise().then(res=> 
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


  async Update(element:ITBLShamelSCCourse)
  {
    if (element && element.serial >0)
    {
      this.selected_employee_course = element;

      const dialogRef = this.dialog.open(TblshamelsccoursemodifyComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_course,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });

    }


  }




}
