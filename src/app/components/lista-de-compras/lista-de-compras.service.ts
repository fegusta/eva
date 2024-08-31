// src/app/shopping-list/shopping-list.service.ts
import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ListaDeComprasService {
  private items: Item[] = [];

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    const existingItem = this.items.find(i => i.name === item.name && i.category === item.category);
    if (existingItem) {
      existingItem.lastPrice = existingItem.price;
      existingItem.price = item.price;
      existingItem.purchased = false;
    } else {
      this.items.push({ ...item, id: this.items.length + 1 });
    }
  }

  markAsPurchased(id: number, price: number) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.purchased = true;
      item.price = price;
    }
  }
}
