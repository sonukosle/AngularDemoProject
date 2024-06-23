import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonServiceService } from 'src/app/shared/service/common-service.service';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent {

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
}

showchartData(year: any, amount: any) {
  new Chart('myChart3', {
    type: 'polarArea',
    data: {
      labels:year,
      datasets: [{
        label: '# of Votes',
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
