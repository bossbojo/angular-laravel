import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';

declare let $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  User: Users[] = [];
  constructor(private http: Http) {
    this.getData();
  }

  ngOnInit() {
  }

  onAdd(name: string, email: string, detail: string) {
    $('#name').val(''); $('#email').val(''); $('#detail').val('');
    var obj = { fullname: name, email: email, detail: detail };
    this.http.post('http://localhost:8000/api/info', obj).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    this.getData();
  }
  onDelete(index) {
    this.http.delete('http://localhost:8000/api/info/'+index).subscribe((res) => {
      console.log(res);
    });
    this.getData();
  }
  getData() {
    this.User = [];
    this.http.get('http://localhost:8000/api/info').subscribe(
      (res) => {
        var data = res.json().getinfo;
        for (var i = 0; i < data.length; i++) {
          this.User.push(new Users(data[i].id, data[i].fullname, data[i].email, data[i].detail));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export class Users {
  constructor(id: string, name: string, email: string, detail: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.detail = detail;
  }
  id: String
  name: String;
  email: String;
  detail: String;
}