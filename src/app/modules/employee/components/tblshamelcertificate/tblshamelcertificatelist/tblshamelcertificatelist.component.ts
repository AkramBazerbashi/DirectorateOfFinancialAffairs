import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITBLShamelCertificate } from '../../../../shared/models/employees_department/ITBLShamelCertificate';
import { TBLShamelCertificateService } from '../../../../shared/services/employees_department/tblshamel-certificate.service';

@Component({
  selector: 'app-tblshamel-certificate',
  templateUrl: './tblshamelcertificatelist.component.html',
  styleUrls: ['./tblshamelcertificatelist.component.scss']
})
export class TBLShamelCertificateComponent implements OnInit {
  

  employee_ShamelCertificate_List:ITBLShamelCertificate[]=[];



  constructor(private employee_LShamelCertificate_List: TBLShamelCertificateService) { }

  ngOnInit(): void {
    this.employee_LShamelCertificate_List.list().subscribe(
      (data:any) => {      
      this.employee_ShamelCertificate_List=data;          
    });
  }

}
