import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail/payment-detail.model';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.form.value)
    this.service.postPaymentDetail(form.form.value).subscribe(
      
        res=>{
          this.resetForm(form);
        },
        err=>{ console.log(err);}
        );       
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData=new PaymentDetail();
  }
}
