import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
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



@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
data: any;
year:any;
amount:any;
color:any;
border:any;
  constructor(private _service: CommonServiceService){
    Chart.register(...registerables);
  }
ngOnInit(): void {
  // this._service.showData().subscribe(res => {
  //   this.data = res;
  //   if (this.data != null) {
  //     this. year=this.data.map((e:any)=>e.year);
  //     this. amount=this.data.map((e:any)=>e.amount);
      
  //     this.showchartData(this.year,this.amount);
  //   }
  // });

  this.data=json.cahrtData;
      this. year=this.data.map((e:any)=>e.year);
      this. amount=this.data.map((e:any)=>e.amount);
      
      this.showchartData(this.year,this.amount);
}

showchartData(year: any, amount: any) {

  new Chart('myChart2', {
    type: 'doughnut',
    data: {
      labels: year,
      datasets: [{
        label: 'Sell Of Mobile',
        data: amount,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}
}

