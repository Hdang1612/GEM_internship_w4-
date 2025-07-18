import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
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
  get errorMessage(): string | null {
    if (!this.control.errors) return null;
    if (this.control.errors['required']) return 'Trường này là bắt buộc.';
    if (this.control.errors['email']) return 'Email không hợp lệ.';
    if (this.control.errors['minlength']) {
      const requiredLength = this.control.errors['minlength'].requiredLength;
      return `Độ dài tối thiểu là ${requiredLength} ký tự.`;
    }
    if (this.control.errors['forbiddenName']) return 'example Hdang1612!';
    return 'Trường không hợp lệ.';
  }
}
