import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/modal/customer.modal';
import { CustomerFacade } from 'src/app/store/customer.facade';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  postForm!: FormGroup;
  postData!: Customer;
  constructor(private customerfacade: CustomerFacade) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      add: new FormControl(null, Validators.required),
      street: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
    });
  }
  onAddPost() {
    this.postData = {
      name: this.postForm.value.name,
      email: this.postForm.value.email,
      phone: this.postForm.value.phone,
      add: this.postForm.value.add,
      location: {
        street: this.postForm.value.street,
        city: this.postForm.value.city,
        zip: this.postForm.value.zip,
      },
    };
    console.log(this.postData, 'post data add');
    this.customerfacade.addNewCustomer(this.postData);
  }
}
