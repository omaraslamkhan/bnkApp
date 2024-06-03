import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { itemstableData } from 'dummyData';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  tableData:any = itemstableData;
  name: string | null = null; // Initialize with null instead of ""
  price: number | null = null; // Initialize with null instead of 0

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openMediumModal( mediumModalContent ) {
    this.modalService.open( mediumModalContent );
  }
  addItem(): void {
    if (this.name && this.price !== null) {
      const newItem = {
        itemId: this.tableData.length + 1, // Generate a unique ID (assuming tableData is an array)
        item: this.name,
        ppu: this.price,
        available: 0, // Initial availability percentage
        date: new Date().toLocaleDateString() // Current date
      };

      this.tableData.push(newItem); // Add the new item to the tableData array
      this.name = null; // Reset name input
      this.price = null; // Reset price input
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
