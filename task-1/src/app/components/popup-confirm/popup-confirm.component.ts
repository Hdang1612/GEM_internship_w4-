import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss'],
})
export class PopupConfirmComponent implements OnInit {
  @Output() confirmStatus = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit(): void {}
  confirm(){
    this.confirmStatus.emit(true)
  }
  cancel(){
    this.confirmStatus.emit(false)
  }
}
