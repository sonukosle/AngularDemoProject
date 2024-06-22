import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private _router:Router,private _toastr: ToastrService){}

  loginForm = new FormGroup({
    loginId: new FormControl(''),
    password: new FormControl(''),
  }); 

loginId:any;
password:any;
ngOnInit(): void {
   
}

obj={
  loginId:'param',
  password:'param@4321'
}

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginId=this.loginForm.value.loginId;
    this.password=this.loginForm.value.password;
    if (this.loginId==this.obj.loginId&&this.password==this.obj.password) {
      this._toastr.success('Successfully loged on..');
      this._router.navigate(['dashboard'])
    } else {
      this._toastr.error("Envalid credentials..");
      this.loginForm.reset();
    }
    
  }
}
