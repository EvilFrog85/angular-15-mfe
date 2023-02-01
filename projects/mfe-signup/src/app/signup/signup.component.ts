import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mfe-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    p1: new FormControl(''),
    p2: new FormControl('')
  });

  registerUser() {
    alert(
      `
      Username: ${this.registerForm.value.username}
      Email: ${this.registerForm.value.email}
      P1: ${this.registerForm.value.p1}
      P2: ${this.registerForm.value.p2}
      `
    );
  }
}
