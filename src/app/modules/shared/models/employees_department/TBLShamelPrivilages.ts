import { TBLShamelUser } from './TBLShamelUser';


export class  TBLShamelPrivilages {
    public  User_ID :number ;
    public  FormName:string ;
    public  NodeText:string;
    public  Privilage:string;

    public TBLShamelUser:TBLShamelUser;

    constructor()
    {
this.Privilage= "";
this.FormName="";
this.User_ID=-1;
this.NodeText="";
    }


       
}
