import { Component, OnInit } from '@angular/core';
import { ExpableData } from 'dummyData';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  tableData:any = ExpableData;
  detail: string | null = null; // Initialize with null instead of ""
  amount: number | null = null; // Initialize with null instead of ""
  date: string | null = null; // Initialize with null instead of ""
  status: string | null = null; // Initialize with null instead of ""

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    if (this.detail && this.amount !== null) {
      const newItem = {
        expId: this.tableData.length + 1, // Generate a unique ID (assuming tableData is an array)
        detail: this.detail,
        amount: this.amount,
        date: new Date().toLocaleDateString(), // Current date
        status:this.status
      };

      this.tableData.push(newItem); // Add the new item to the tableData array
      this.detail = null; // Reset name input
      this.amount = null; // Reset price input
    }
  }

  deleteItem(itemId: string): void {
    // Find index of item with matching itemId
    const index = this.tableData.findIndex(item => item.expId === itemId);
    // If index is found, remove item from array
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }
}
