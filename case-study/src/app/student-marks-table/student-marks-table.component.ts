import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import * as data from './data.json';

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.css']
})
export class StudentMarksTableComponent implements OnInit {

  studentData = (data as any).default;
  displayedColumns: string[] = Object.keys(this.studentData[0]);
  dataSource = this.studentData;
  sortedStudents: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.sortedStudents = this.studentData.slice();
    console.log(this.studentData)
  }

  sortData(sort: Sort) {
    const data = this.studentData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedStudents = data;
      return;
    }

    this.sortedStudents = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'class':
          return compare(a.class, b.class, isAsc);
        case 'section':
          return compare(a.section, b.section, isAsc);
        case 'sub1':
          return compare(a.sub1, b.sub1, isAsc);
        case 'sub2':
          return compare(a.sub2, b.sub2, isAsc);
        case 'sub3':
          return compare(a.sub3, b.sub3, isAsc);
        default:
          return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
