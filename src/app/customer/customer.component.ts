import { Component, OnInit } from '@angular/core';
import { tableData } from 'dummyData';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  tableData:any = tableData;

  name:"";
  status:"";
  product:"";
  constructor() { }

  ngOnInit(): void {
  }
  addItem(): void {
    
    if (this.name && this.status !== null) {
      const newItem = {
        id: this.tableData.length + 1, // Generate a unique ID (assuming tableData is an array)
        user: this.name,
        product: this.product,
        sale:Math.floor(Math.random() * 100) + 1,
        status: this.status, // Initial availability percentage
      };

      this.tableData.push(newItem); // Add the new item to the tableData array
      this.name = null; // Reset name input
      this.status = null; // Reset price input
      this.product = null; // Reset price input
    }
  }

  deleteItem(itemId: string): void {
    // Find index of item with matching itemId
    const index = this.tableData.findIndex(item => item.itemId === itemId);
    // If index is found, remove item from array
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }
}
