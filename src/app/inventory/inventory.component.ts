import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvTableData } from 'dummyData';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  tableData:any = InvTableData;
  invName: string | null = null; // Initialize with null instead of ""
  customer: string | null = null; // Initialize with null instead of ""
  purchaseDate: string | null = null; // Initialize with null instead of ""

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openMediumModal( mediumModalContent ) {
    this.modalService.open( mediumModalContent );
  }
  
  addItem(): void {
    if (this.invName && this.customer !== null) {
      const newItem = {
        invId: this.tableData.length + 1, // Generate a unique ID (assuming tableData is an array)
        invName: this.invName,
        customer: this.customer,
        date: new Date().toLocaleDateString() // Current date
      };

      this.tableData.push(newItem); // Add the new item to the tableData array
      this.invName = null; // Reset name input
      this.customer = null; // Reset price input
    }
  }

  deleteItem(itemId: string): void {
    // Find index of item with matching itemId
    const index = this.tableData.findIndex(item => item.invId === itemId);
    // If index is found, remove item from array
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }


}
