import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/shared/directive';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent implements OnInit {
  constructor() {}
  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      forbiddenNameValidator(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      ),
    ]),
  });
  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    else {
      console.log(this.form.value);

    }
  }
}
