import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail/payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  formData : PaymentDetail =new PaymentDetail();

}