import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, RatingModule, ButtonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {
  constructor(private formBuilder: FormBuilder) {}

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    @Input() header!: string;

    @Input() product: Product = {
      name: '',
      image: '',
      price: '',
      rating: 0,
    };

  @Output() confirm = new EventEmitter<Product>();
  

  // productForm = this.formBuilder.group({
  //   name: ['', [Validators.required]],
  //   image: [''],
  //   price: ['', [Validators.required]],
  //   rating: [0],
  // });

  onConfirm() {
    this.confirm.emit(this.product);
    this.display = false;
    this.displayChange.emit(this.display);
  };

  onCancel() {
    this.display = false;
    this.displayChange.emit(this.display);
  };
}
