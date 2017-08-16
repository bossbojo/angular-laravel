import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { ValidatorsConfig } from '../configs/validators.config';

declare let $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  User: any[] = [];
  constructor(private http: Http) {
    this.getData();
  }
  ngOnInit() {
  }
  onAdd(name: string, email: string, detail: string) {

    $('#loadingADD').fadeIn();
    $('#name').val(''); $('#email').val(''); $('#detail').val('');
    var obj = { fullname: name, email: email, detail: detail };
    this.http.post('http://localhost:8000/api/info', obj).subscribe((res) => {
      this.getData();
      $('#loadingADD').fadeOut();
    }, (err) => {
      console.log(err);
    });

  }
  onDelete(index) {
    $('#loading' + index).fadeIn();
    this.http.delete('http://localhost:8000/api/info/' + index).subscribe((res) => {
      this.getData();
      $('#loading' + index).fadeOut();
    });

  }
  getData() {
      this.http.get('http://localhost:8000/api/info').subscribe(
        (res) => {
          this.User = res.json().getinfo;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  Ondetail(Id) {
    for (var i = 0; i < this.User.length; i++) {
      if (this.User[i].id == Id) {
        $('#IDdata').html(this.User[i].id);
        $('#D-name').html(this.User[i].fullname);
        $('#D-mail').html(this.User[i].email);
        $('#D-detail').html(this.User[i].detail);
      }
    }
  }
  OnEdit(Id) {
    for (var i = 0; i < this.User.length; i++) {
      if (this.User[i].id == Id) {
        $('#IDdataE').html(this.User[i].id);
        $('#IdEdit').val(this.User[i].id);
        $('#fullnameE').val(this.User[i].fullname);
        $('#emailE').val(this.User[i].email);
        $('#detailE').val(this.User[i].detail);
      }
    }
  }
  OnSubmit(Id, name, email, detail) {
    $('#loadingEdit').fadeIn();
    var obj = { fullname: name, email: email, detail: detail };
    this.http.put('http://localhost:8000/api/info/' + Id, obj).subscribe((res) => {
      this.getData();
      $('#loadingEdit').fadeOut();
      $('#closeEdit').click();
    });
  }
}