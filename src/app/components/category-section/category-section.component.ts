import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Item } from '../lista-de-compras/item.model';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css'] // Estilos podem ser compartilhados
})
export class CategorySectionComponent {
  @Input() category!: string; // A categoria a ser exibida
  @Input() items!: Item[]; // Itens filtrados para a categoria
  @Input() backgroundColor: string = '#FFFFFF';
  @Output() itemClick = new EventEmitter<Item>();

  onItemClick(item: Item): void {
    this.itemClick.emit(item);
  }
}
