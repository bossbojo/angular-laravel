import { Component, OnInit } from '@angular/core';
declare let $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  User: Users[] = [];
  constructor() {
    this.User.push(new Users('Paramat Singkon','paramat@ubu.ac.th','just code that so easy.'));
  }

  ngOnInit() {
  }

  onAdd(name: string, email: string, detail: string) {
    console.log(name + ' ' + email + ' ' + detail);

    this.User.push(new Users(name, email, detail));
  }
  deleteItem(item) {
    this.User.splice(item, 1);
  }
  onDetail(item){
    $('#userid').html(item);
    $('#userName').html(this.User[item].name);
    $('#userEmail').html(this.User[item].email);
    $('#userDetail').html(this.User[item].detail);
  }

}

export class Users {
  constructor(name: string, email: string, detail: string) {
    this.name = name;
    this.email = email;
    this.detail = detail;
  }
  name: String;
  email: String;
  detail: String;
}