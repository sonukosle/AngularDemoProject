
import {Component,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

// josn data
let json={
  "cahrtData":[
    {
        "id":1,
        "year":"2019",
        "amount":"5000",
        "product":"Mobile samsung",
        "color":"rgba(255, 99, 132, 0.2)",
        "borderColor":"rgba(255, 99, 132)"
    },
    {
        "id":2,
        "year":"2020",
        "amount":"6000",
        "product":"Mobile RealMe",
        "color":"rgba(255, 159, 64, 0.2)",
        "borderColor":"rgba(255, 159, 64)"
    },
    {
        "id":3,
        "year":"2021",
        "amount":"7000",
        "product":"Mobile Vivo",
        "color":"rgba(255, 205, 86, 0.2)",
        "borderColor":"rgba(255, 205, 86)"
    },
    {
        "id":4,
        "year":"2022",
        "amount":"10000",
        "product":"Mobile Oppo",
        "color":"rgba(75, 192, 192, 0.2)",
        "borderColor":"rgba(75, 192, 192)"
    },
    {
        "id":5,
        "year":"2023",
        "amount":"12000",
        "product":"Mobile Iphone",
        "color":"rgba(54, 162, 235, 0.2)",
        "borderColor":"rgba(54, 162, 235)"
    },
    {
        "id":6,
        "year":"2024",
        "amount":"9000",
        "product":"Mobile LG",
        "color":"rgba(153, 102, 255, 0.2)",
        "borderColor":"rgba(153, 102, 255)"
    }
]
}
// josn data
// table
export interface Product {
  id: string;
  year: string;
  amount: string;
  product: string;
}

var Productdata:any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['id', 'year', 'amount', 'product'];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataResult:any;
 
  constructor(private _service:CommonServiceService){
    // calling api
    // this._service.showData().subscribe(res=>{
    //   console.log(res);
    // });

    Productdata=json.cahrtData;
    console.log('from json',Productdata);

    // // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(Productdata);

  }

  ngOnInit() {
  }

ngAfterViewInit() {
  this.dataSource!.paginator = this.paginator;
  this.dataSource!.sort=this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource!.filter = filterValue.trim().toLowerCase();

  if (this.dataSource!.paginator) {
    this.dataSource!.paginator.firstPage();
  }
}

}
