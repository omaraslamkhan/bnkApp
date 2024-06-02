import { Component, OnInit } from '@angular/core';
import { TransactiontableData } from 'dummyData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bank-transaction',
  templateUrl: './bank-transaction.component.html',
  styleUrls: ['./bank-transaction.component.scss']
})
export class BankTransactionComponent implements OnInit {
  tableData:any = TransactiontableData;
  name: string | null = null; // Initialize with null instead of ""
  customer: string | null = null; // Initialize with null instead of ""
  bankName: string | null = null; // Initialize with null instead of ""

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  
  addItem(): void {
    if (this.name && this.customer !== null) {
      const newItem = {
        trid: this.tableData.length + 1, // Generate a unique ID (assuming tableData is an array)
        deal: this.name,
        customer: this.customer,
        bankName: this.bankName, // Initial availability percentage
        date: new Date().toLocaleDateString() // Current date
      };

      this.tableData.push(newItem); // Add the new item to the tableData array
      this.bankName = null; // Reset name input
      this.customer = null; // Reset price input
      this.name = null; // Reset price input
    }
  }
  onCustomerClick(mediumModalContent){
    this.modalService.open( mediumModalContent );
  }
  deleteItem(itemId: string): void {
    // Find index of item with matching itemId
    const index = this.tableData.findIndex(item => item.trid === itemId);
    // If index is found, remove item from array
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }

}
