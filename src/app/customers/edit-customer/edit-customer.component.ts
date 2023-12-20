import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/modal/customer.modal';
import { CustomerFacade } from 'src/app/store/customer.facade';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm!: FormGroup;
  customerfacade = inject(CustomerFacade);
  EditData!: Customer;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const custId: string = params.get('id')!;
      console.log(custId);
      this.customerfacade.customerList$.subscribe((res) => {
        const editData = res.find((data) => data.id === +custId);
        console.log(editData);
        this.editCustomerForm = new FormGroup({
          id: new FormControl(editData?.id),
          name: new FormControl(editData?.name, [Validators.required]),
          email: new FormControl(editData?.email, [Validators.required]),
          phone: new FormControl(editData?.phone, [Validators.required]),
          address: new FormControl(editData?.add, [Validators.required]),

          city: new FormControl(editData?.location.city, [Validators.required]),
          zip: new FormControl(editData?.location.zip, [Validators.required]),
          Street: new FormControl(editData?.location.street, [
            Validators.required,
          ]),
        });
      });
    });
  }

  updateCustomer(id: number, value: Customer) {
    this.EditData = {
      name: this.editCustomerForm.value.name,
      email: this.editCustomerForm.value.email,
      phone: this.editCustomerForm.value.phone,
      add: this.editCustomerForm.value.add,
      location: {
        street: this.editCustomerForm.value.street,
        city: this.editCustomerForm.value.city,
        zip: this.editCustomerForm.value.zip,
      },
    };
    this.customerfacade.editCustomer(id, value);
  }
}
