
import { MatRadioButton, MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { TBLShamelUserService } from '../../../../modules/shared/services/employees_department/tblshamel-user.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TBLShamelUser } from '../../../../modules/shared/models/employees_department/TBLShamelUser';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeNode} from '@angular/material/tree';
import { TBLShamelPrivilages } from '../../../../modules/shared/models/employees_department/TBLShamelPrivilages';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TBLShamelPrivilageServiceService } from '../../../../modules/shared/services/employees_department/tblshamel-privilage-service.service';


 //Array Of AutoComplere With Filter
 interface TreeNode {
  FormCaption: string;   
  FormName: string;  
  TypeForm:number;
  id:number,
  children?: TreeNode[];
}

const Privilage_DATA: TreeNode[] = [
  {
    FormCaption: 'مديرية الشؤون الإدارية',
    FormName:'',
    TypeForm:2,
    id:0,
    children: [
      { 
        FormCaption: 'الذاتية',
        FormName:'',
         TypeForm:2 ,
         id:1,
         children:[
           {
            FormCaption: 'البطاقة الذاتية',
            FormName:'',
             TypeForm:2 ,
             id:2,
             children:[
               {
                FormCaption:'البيانات الشخصية',
                FormName:'ManageEmployeeDataCardFrame1',
                TypeForm:1,
                id:3,
               },
               {
                FormCaption:'المؤهل العلمي',
                FormName:'ManageSCEducationFrame1',
                TypeForm:1,
                id:4,
               },

             ]
           },
           { 
            FormCaption: 'الترفيعات والزيادات',
            FormName:'',
             TypeForm:2 ,
             id:5,
             children:[
              {                
                FormCaption:'تجهيز ملف الترفيعات',
                FormName:'UpgradePrepareAllFrame1',
                TypeForm:1,
                id:6,
               },
               {
                  FormCaption:'عرض بيانات الترفيعات',
                  FormName:'UpgradeViewDataFrame1',
                  TypeForm:1,                  
                  id:7,
                },                       
              ]                    
            }
         ]
        
    },    
  ]

}];


@Component({
  selector: 'app-tblshamel-privilages',
  templateUrl: './tblshamel-privilages.component.html',
  styleUrls: ['./tblshamel-privilages.component.scss']
})
export class TBLShamelPrivilagesComponent implements OnInit {
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];


  privilageEntry:FormControl;

  privilageInput:FormControl; 
  privilageUpdate:FormControl; 
  privilageDisplay:FormControl; 
  privilagePrint:FormControl; 
  privilageDelete:FormControl; 



  
  User_List :TBLShamelUser[]=[];
  filteredUserOptions: Observable<TBLShamelUser[]>;  
  Selected_User : TBLShamelUser;
  Selected_Node :TreeNode;

  Form:FormGroup;
  autocomplete_Users = new FormControl();
  Daera_Name = new FormControl();
  
  ShowPrivilage:Number;


  PrivilageTreeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();



  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;


  ShamelPrivilages:TBLShamelPrivilages;

  constructor(
    public UserService:TBLShamelUserService,
    public PrivilageService:TBLShamelPrivilageServiceService,
     private fb: FormBuilder) {
    this.dataSource.data = Privilage_DATA;
  
    this.BuildForm();
    this.FillArrayUsingService();
    this.ShowPrivilage = 0;
   }


   public BuildForm()
   {
     try{  

      this.autocomplete_Users   = new FormControl();
      this.Daera_Name   = new FormControl();

      this.privilageEntry= new FormControl();
      this.privilageInput=new FormControl();
      this.privilageUpdate=new FormControl();
      this.privilageDisplay=new FormControl();
      this.privilagePrint=new FormControl();
      this.privilageDelete = new FormControl();

     
      

      

      this.Form = this.fb.group({
        });
        this.Form .addControl('autocomplete_Users',this.autocomplete_Users);        
        this.Form .addControl('Daera_Name',this.Daera_Name);

        this.Form .addControl('privilageEntry',this.privilageEntry);
        this.Form .addControl('privilageInput',this.privilageInput);
        this.Form .addControl('privilageUpdate',this.privilageUpdate);
        this.Form .addControl('privilageDisplay',this.privilageDisplay);
        this.Form .addControl('privilagePrint',this.privilagePrint);
        this.Form .addControl('privilageDelete',this.privilageDelete);


        

      }catch(Exception:any){
        console.log(Exception);
      }
   }
   //#endregion

  ngOnInit(): void {
  }

  public InputPrivilage()
  {
      try{
         
          const usingArrayFrom = Array.from(this.ShamelPrivilages.Privilage);
          if (usingArrayFrom && usingArrayFrom .length>0)
          {
            if (this.Selected_Node && this.Selected_Node.TypeForm ==1)
            {
              usingArrayFrom.forEach((currentValue, index) => {
                let Result :boolean = false;
                Result=Boolean(JSON.parse(currentValue));
                console.log(index);
                console.log(Result);

                switch(index)
                {
                  case 0:
                    this.privilageInput.setValue(Result);
                    break;
                  case 1:
                    this.privilageUpdate.setValue(Result);
                    break;
                  case 2:
                    this.privilageDisplay.setValue(Result);
                    break;
                  case 3:
                    this.privilagePrint.setValue(Result);
                    break;
                  case 4:
                    this.privilageDelete.setValue(Result);
                    break;
                 
                }
  
                
              });
            }else if (this.Selected_Node && this.Selected_Node.TypeForm ==2)
            {
              let Result :boolean = false;
              Result=Boolean(JSON.parse(usingArrayFrom[2]));
              this.privilageEntry.setValue(Result);
              console.log('InputPrivilage'+Result);


            }
          
            
             
          }            
      }
      catch(ex)
      {

      }

     
  
 
  }

  public GetInputPrivilage(index:number):boolean
  {
      try{
          console.log('dsdsds');
          console.log(this.ShamelPrivilages. Privilage);
          console.log('dsdsds');
          const usingArrayFrom = Array.from(this.ShamelPrivilages.Privilage);
          if (usingArrayFrom && usingArrayFrom .length>0)
          {

              let result :string ="";
              result  = usingArrayFrom[index];

              return  Boolean(JSON.parse(result));
          }            
      }
      catch(ex)
      {

      }

      return false;
  
 
  }
  
  public GetPrivilage()
  {
    console.log("GetPrivilage");

    if (this.Selected_User && this.Selected_User.User_ID>0 &&
      this.Selected_Node && this.Selected_Node.FormName)
    {
        this.PrivilageService.GetByUserAndForm(this.Selected_User .User_ID,this.Selected_Node.FormName).subscribe(res =>
          {
            console.log(res );
            this.ShamelPrivilages = res as TBLShamelPrivilages;
            console.log(this.ShamelPrivilages);

            if (this.ShamelPrivilages && 
              this.ShamelPrivilages.Privilage)
              {
                this.InputPrivilage();
                
              }


          }
          );
    }
    
  }
  public displayUSerProperty(value:string):string  {

   

    
    if (value && this.User_List){
     
      let User:any = this.User_List.find(obj => obj.User_ID.toString() == value) ;
      if (User)
      return User.FullName;
    }
    return '';
  }  

  public OnSelectUserChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event   )
    {

      

      let Id:Number= event.option.value as Number;

      var Result = this.User_List.find(x => x.User_ID === Id);
      if (Result)
      {
          this.Selected_User = Result;
          this.Daera_Name.setValue(this.Selected_User.TBLShamelDaera.Daera_Name);          
      }
        

    }
      
  }

  
  public async FillArrayUsingService()
  {
    try{

      if (!this.User_List || this.User_List.length<=0)
      {
        
       this.UserService.list().subscribe(
         (data:any)=> {
           
          console.log('AAAA');    
          this.User_List=data;  
           console.log(data);    
         });


     
      }

      
      
      this.filteredUserOptions = this.autocomplete_Users.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredUser(value) : this.User_List.slice() )
      );  
    
    }catch(Exception : any)
    {}
  }
 
  private _filteredUser(value: string): TBLShamelUser[] {   

    console.log(value.toString()); 

    if (value)
    {
    const filterValue = value ;
    return this.User_List.filter(obj => obj.FullName.includes(filterValue) );
    }
    return this.User_List.slice();
  }

  ClickNode(node:TreeNode){

    console.log(node);

this.update();

this.Selected_Node =node;
  if (this.Selected_User && this.Selected_User.User_ID >0)
  {
    console.log('GetPrivilage');

    this.GetPrivilage();
    console.log('end GetPrivilage');

  }
    if (node )
    {
      console.log(node .TypeForm );
      switch(node .TypeForm )
      {
        case 2:
          this.ShowPrivilage = 2;
          break;

        case 1:
        this.ShowPrivilage = 1;
        break;


      }
    }

    
    
  }


  setAll(completed: boolean) {
    
    
  }
  

  public update()
  {
    if (!this.ShamelPrivilages 

      )
      {
        this.ShamelPrivilages = new TBLShamelPrivilages();
      }

    let strPrivilage:string  ='';
console.log(this.Selected_Node);
    if (this.Selected_Node &&
      this.Selected_Node.TypeForm==1)
      {
        console.log(this.privilageInput.value);
        if (this.privilageInput.value == true)
          strPrivilage = strPrivilage +'1';
        else 
          strPrivilage = strPrivilage +'0';

          console.log(this.privilageUpdate.value);

          if (this.privilageUpdate.value == true)
          strPrivilage = strPrivilage +'1';
        else 
          strPrivilage = strPrivilage +'0';
          
          console.log(this.privilageDisplay.value);

          if (this.privilageDisplay.value == true)
          strPrivilage = strPrivilage +'1';
        else 
          strPrivilage = strPrivilage +'0';

          console.log(this.privilagePrint.value);

          if (this.privilagePrint.value == true)
          strPrivilage = strPrivilage +'1';
        else 
          strPrivilage = strPrivilage +'0';


          console.log(this.privilageDelete.value);


          if (this.privilageDelete.value == true)
          strPrivilage = strPrivilage +'1';
        else 
          strPrivilage = strPrivilage +'0';


          console.log(strPrivilage);

      }else if (this.Selected_Node &&
        this.Selected_Node.TypeForm==2)
        {
         
          if (this.privilageEntry.value == true)

          strPrivilage = '00100';
        else 
        strPrivilage = '00000';
        }

        if (this.Selected_Node && this.Selected_User.User_ID >0 &&
          this.ShamelPrivilages
        )
          {
            console.log('Update');
            console.log(strPrivilage);
            

        this.ShamelPrivilages.FormName = this.Selected_Node.FormName;
        this.ShamelPrivilages.User_ID = this.Selected_User.User_ID;
        this.ShamelPrivilages.Privilage  = strPrivilage;

        console.log(this.ShamelPrivilages);

        this.PrivilageService.InsertIfNew(this.ShamelPrivilages).subscribe
        (res => 
          {
            console.log('inside syn');
            console.log(res);

          }
          

          );
        console.log('end update');
          }


  }

  onChange(mrChange: MatRadioChange) {
    console.log("Begin onChange");
    console.log(mrChange.value);
    let mrButton: MatRadioButton = mrChange.source;
    console.log(mrButton.name);
    console.log(mrButton.checked);
    console.log(mrButton.inputId);
    console.log("End onChange");
 } 
}
