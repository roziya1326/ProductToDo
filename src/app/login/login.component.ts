import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordChecks = {
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
    noSpaces: false
  };
  isPasswordTouched = false; // Flag to track if the password field is touched

  StrongPassword: RegExp = /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.StrongPassword)])
    });

    // Subscribe to password value changes
    this.loginForm.get('password')?.valueChanges.subscribe(value => {
      this.updatePasswordChecks(value);
    });

    // Track if the password field has been touched
    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.isPasswordTouched = true;
    });
  }

  updatePasswordChecks(password: string) {
    this.passwordChecks = {
      length: password.length >= 8 && password.length <= 20,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
      noSpaces: !/\s/.test(password)
    };
  }

  get passwordErrors() {
    const password = this.loginForm.get('password');
    if (password?.hasError('required')) {
      return 'Password is required';
    }
    if (password?.hasError('pattern')) {
      return 'Password must be 8-20 characters long, include at least one uppercase letter, one number, one special character, and no spaces';
    }
    return '';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Add your navigation logic here if needed
      // this.router.navigate(['/some-route']);
    }
  }
}
