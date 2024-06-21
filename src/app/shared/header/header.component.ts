import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _router:Router,private _toastr: ToastrService){}
  username:String='Param';
  isLogged:boolean=true;
 
  ngOnInit(): void {
    
  }
 


  logout(){
    this._toastr.success('Successfully Logged Out');
    this._router.navigate(['login']);
  }
}
