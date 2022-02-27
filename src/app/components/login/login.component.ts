import { Component, OnInit } from '@angular/core';

import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[]=[]

  constructor( private api: ApiDataService) { }

  //Todo lo que haya dentro de ngOnInit se ejecutará al iniciar
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.api.getData().subscribe(users=>{
      this.users=users
      //console.log(users)
    })
  }

  addUser(name: String, mail: String, password: String){
    this.api.insertUser(name,mail,password).subscribe(()=>{
      this.getUsers();//Actualiza la página con el nuevo usuario
    });
  }

  searchByMailAndPassword(mail: String, password: String){
    this.api.searchByMailAndPassword(mail,password).subscribe((user) => {
      if( user!= null){
        window.alert("Login Correcto")
        location.href="home";
      }else{
        window.alert("Login incorrecto")
      }
      })

    
  }

}
