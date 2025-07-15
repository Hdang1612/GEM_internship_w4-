import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() type!: 'text' | 'password' | 'email' | 'number';
  @Input() placeholder: string = '';
  constructor() {}
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      console.log(this.control.errors);
    });
  }
}
