import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { mail } from './mail.model';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  formValue! : FormGroup;
  file!: File;
  mailObj: mail = new mail();
  RoleData:any;
  progress: number = 0;

  email!: string;
  subject!: string;
  content!: string;
  document!: any;
  constructor(
    private matDialogRef:MatDialogRef<MailComponent>,
    private formbuilder:FormBuilder,
    private router: Router,
    private api: ServiceService
  ) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      email:['',[Validators.email,Validators.required]],
      subject:['',[Validators.required]],
      content:['',[Validators.required]],
      // document:[''],
    })
    this.getRole();
  }

  onClose(){
    this.matDialogRef.close();
  }

  // file: File | null = null

  // onFileInput(files: FileList | null): void {
  //   if (files) {
  //     // this.file = files.item(0)
  //   }
  // }

  onFileChanged(event: any) {
    if(event){
      this.file = event.target.files[0]
      console.warn(this.file)
    }


  }

  postMail(){


    const formData = new FormData();
    formData.append('email', this.formValue.value.email);
    formData.append('subject', this.formValue.value.subject);
    formData.append('content', this.formValue.value.content);
    formData.append('document', this.file, this.file.name);

      // this.mailObj.email = this.formValue.value.email;
      // this.mailObj.subject = this.formValue.value.subject;
      // this.mailObj.content = this.formValue.value.content;
      // this.mailObj.document = this.formValue.value.document;
      console.warn(this.file);

    this.api.postMail(formData).subscribe((event: HttpEvent<any>) =>{
      // console.warn(res);


      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          // this.progress = Math.round(100 * event.loaded / event.total);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 1500);

      }

      this.formValue.reset();
      this.matDialogRef.close('add');
      },
        err=>{
          alert("error sending mail")
        }
      )
  }

  getRole(){
    this.api.getUser().subscribe(res => {
      this.RoleData= res.client;
      console.warn(res);

    })
  }

}
