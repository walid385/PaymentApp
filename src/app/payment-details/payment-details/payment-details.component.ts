import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  
    constructor(public service: PaymentDetailService, private toastr: ToastrService) {

      
     }
  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(selctetedId:PaymentDetail){
    if(confirm('Are you sure you want to delete this record?')){
      this.service.deletePaymentDetail(selctetedId).subscribe({
        next: res => {
          this.toastr.warning('Deleted successfully', 'Delete Payment Detail');
          this.service.refreshList();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

  onEdit(selectedRecord:PaymentDetail){
    this.service.populateForm(selectedRecord);
    
  }


}
