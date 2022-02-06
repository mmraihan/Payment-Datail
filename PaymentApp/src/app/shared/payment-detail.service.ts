import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail/payment-detail.model';
import{ HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  readonly baseUrl ="https://localhost:44332/api/PaymentDetails";
  formData : PaymentDetail =new PaymentDetail();
  list : PaymentDetail[]
 

  postPaymentDetail(data: any){
    console.log(data);
    return this.http.post(this.baseUrl, this.formData);
   
  }
  refreshList(){
    return this.http.get(this.baseUrl)
    .toPromise()
    .then(res=>this.list=res as PaymentDetail[])
  }

}
