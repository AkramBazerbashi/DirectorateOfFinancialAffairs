import { Injectable } from '@angular/core';
import { TBLShamelOverTimeShateb } from '../../../models/finance_department/broker/TBLShamelOverTimeShateb';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelOverTimeShatebService {

  constructor() { }

  data: TBLShamelOverTimeShateb[] = [
    {
      serialNumber: 1,
      brokerID: 1,
      areaID: 1,
      yearID: 1993,
      monthID: 1,
      schoolID: 1,
      payrolID: "1",
      dayCount: 1,
    },
    {
      serialNumber: 2,
      brokerID: 2,
      areaID: 2,
      yearID: 1994,
      monthID: 2,
      schoolID: 2,
      payrolID: "2",
      dayCount: 2,
    },
    {
      serialNumber: 3,
      brokerID: 3,
      areaID: 3,
      yearID: 1995,
      monthID: 3,
      schoolID: 3,
      payrolID: "3",
      dayCount: 3,
    },
    {
      serialNumber: 4,
      brokerID: 4,
      areaID: 4,
      yearID: 1996,
      monthID: 4,
      schoolID: 4,
      payrolID: "4",
      dayCount: 4,
    },
    {
      serialNumber: 5,
      brokerID: 5,
      areaID: 5,
      yearID: 1997,
      monthID: 5,
      schoolID: 5,
      payrolID: "5",
      dayCount: 5,
    },
    {
      serialNumber: 6,
      brokerID: 6,
      areaID: 6,
      yearID: 1998,
      monthID: 6,
      schoolID: 6,
      payrolID: "6",
      dayCount: 6,
    },
    {
      serialNumber: 7,
      brokerID: 7,
      areaID: 7,
      yearID: 1999,
      monthID: 7,
      schoolID: 7,
      payrolID: "7",
      dayCount: 7,
    },
    {
      serialNumber: 8,
      brokerID: 8,
      areaID: 8,
      yearID: 2000,
      monthID: 8,
      schoolID: 8,
      payrolID: "8",
      dayCount: 8,
    },
    {
      serialNumber: 9,
      brokerID: 9,
      areaID: 9,
      yearID: 2001,
      monthID: 9,
      schoolID: 9,
      payrolID: "9",
      dayCount: 9,
    },
    {
      serialNumber: 10,
      brokerID: 10,
      areaID: 10,
      yearID: 2002,
      monthID: 10,
      schoolID: 10,
      payrolID: "10",
      dayCount: 10,
    },
    {
      serialNumber: 11,
      brokerID: 11,
      areaID: 11,
      yearID: 2003,
      monthID: 11,
      schoolID: 11,
      payrolID: "11",
      dayCount: 11,
    },
    {
      serialNumber: 12,
      brokerID: 12,
      areaID: 12,
      yearID: 2004,
      monthID: 12,
      schoolID: 12,
      payrolID: "12",
      dayCount: 12,
    },
  ];

  add(obj: TBLShamelOverTimeShateb){
   
  }

  update(obj: TBLShamelOverTimeShateb){
    for (let i= 0; i< this.data.length; i++)
      if (this.data[i].serialNumber == obj.serialNumber)
        this.data[i]= obj;
  }

  public delete(obj: TBLShamelOverTimeShateb){
    this.data = this.data.filter((el)=>{
      return el.serialNumber != obj.serialNumber;
    });
  }
}
