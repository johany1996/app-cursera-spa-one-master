import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.user);

  }
}
function passwordMatchValidator(g: FormGroup) {
  return g.get('password').value === g.get('passwordRepeat').value
    ? null : { 'mismatch': true };
}