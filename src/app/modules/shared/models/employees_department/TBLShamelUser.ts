import { Byte } from "@angular/compiler/src/util";
import { TBLShamelDaera } from "./TBLShamelDaera";

export class TBLShamelUser {
    public User_ID:number ;
    public FullName:string 
    public Daera_ID :string;
    public UserName : string;
    public Password  : string;
    public HDSERIAL  : string;
    public EnterMinTime  : string;
    public EnterMaxTime  : string;
    public AccountCreationDate  : string;
    public AccountCreationTime  : string;
    public AccountModificationDate  : string;        
    public AccountModificationTime  : string;
    public Photo  :string;
    public Enabled  :number;
    public ProgID  :number;
    public SEnabled  :string;
    public TBLShamelDaera:TBLShamelDaera;
}