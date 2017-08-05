import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  User:Users[]=[];
  constructor() { }

  ngOnInit() {
  }
  
  onAdd(name:string,email:string,detail:string){
    console.log(name+' '+email+' '+detail);
    
    this.User.push(new Users(name,email,detail));
  }

}

export class Users {
  constructor(name: string, email: string , detail:string) {
    this.name = name;
    this.email = email;
    this.detail = detail;
  }
  name: String;
  email: String;
  detail: String;
}