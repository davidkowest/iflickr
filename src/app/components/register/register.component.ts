import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any[]=[]

  constructor( private api: ApiDataService) { }

  isEnable: boolean = false

  ngOnInit(): void {
  }

  getUsers(){
    this.api.getData().subscribe(users=>{
      this.users=users
      //console.log(users)
    })
  }

  addUser(name: String, mail: String, password: String) {
    if (name != null && mail != null && password != null) {
      window.alert("Registro correcto")
      this.api.insertUser(name, mail, password).subscribe();
      const area = document.getElementById(`name`) as HTMLTextAreaElement;
      area.value = '';
      const area1 = document.getElementById(`email`) as HTMLTextAreaElement;
      area1.value = '';
      const area2 = document.getElementById(`password`) as HTMLTextAreaElement;
      area2.value = '';
    } else {
      window.alert("Registro incorrecto porfavor vuelva a intentarlo")
    }
  }

  searchByMailAndPassword(mail: String, password: String){
    this.api.searchByMailAndPassword(mail,password).subscribe((user) => {
      if( user!= null){
        window.alert("Login Correcto")
      }else{
        window.alert("Login incorrecto")
      }
      })

    
  }

  comprobar(name: String, mail: String, password: String) {
    if (name.length > 1 && mail.includes("@") && password.length > 8) {
      this.isEnable = true
    } else {
      this.isEnable = false
    }
  }

}
