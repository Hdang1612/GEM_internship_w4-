import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent implements OnInit {
  constructor() {}
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      alert('submitted');
    }
  }
}
