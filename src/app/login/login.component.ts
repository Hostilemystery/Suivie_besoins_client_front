
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  message!: string;

  loading!:boolean;
  errors!:boolean;
  tokens!:string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private auth: AuthService,private toastr: ToastrService, private token: TokenService) { }

  ngOnInit(): void {
    // this.formControlName.email = "fred@gmail.com";
    this.loginForm = this.formBuilder.group({
      email:['',Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]{2,5}')],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
    // this.token.revokeToken(this.tokens);
  }

  login(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;


    console.warn(email);
    console.warn(password);

    this.auth.login(email, password).subscribe(
      data => {

        if(data.code !== 200) {
          this.message = data.message;
        }
        if(data.code === 200) {
          // this.tokenStorage.saveToken(data.body.accessToken);
          // this.tokenStorage.saveUser(data.body);
          localStorage.setItem("datas", JSON.stringify(data));
          this.token.saveToken(data.body.accessToken);
          this.tokens = data.body.accessToken;
          const user = JSON.parse(localStorage.getItem('datas') || '{}').body.user.type_utilisateur_id;
          if (user===1) {

            this.router.navigate(['/dashboard']);
          }else{
            this.router.navigate(['/dashboard']);
          }
          this.toastr.success('Connexion reussi', 'Felicitation',{
            timeOut: 1500
          });
        }
        console.warn(data);
      },
      err => {
        this.toastr.warning('une erreur est survenue, veillez vérifier les champs et reéssayer')
        // this.message = "une erreur est survenue, veillez vérifier les champs et reéssayer"
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
