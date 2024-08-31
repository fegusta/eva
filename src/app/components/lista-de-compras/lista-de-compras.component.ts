import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CategorySectionComponent } from '../category-section/category-section.component';
import { Item } from './item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-de-compras',
  standalone: true,
  imports: [CommonModule, FormsModule, CategorySectionComponent],
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent implements OnInit {
  wishList: Item[] = [];
  newItem: Item = { id: 0, name: '', category: 'Higiene e Beleza', purchased: false, dateAdded: new Date()};

  categories: string[] = [
    'Comida',
    'Limpeza',
    'Bebidas',
    'Snacks e Petiscos',
    'Congelados',
    'Produtos de Padaria',
    'Higiene e Beleza',
    'Eletrônicos',
    'Papelaria',
    'Diversos'
  ];

  categoryThemes: { [key: string]: string } = {
    'Comida': '#FFDDC1', // Tom pastel para comida
    'Limpeza': '#C1E1C1', // Tom pastel para limpeza
    'Bebidas': '#C1D3FF', // Tom pastel para bebidas
    'Snacks e Petiscos': '#F9E4B7', // Tom pastel para snacks
    'Congelados': '#E1C6FF', // Tom pastel para congelados
    'Produtos de Padaria': '#D4E2FC', // Tom pastel para padaria
    'Higiene e Beleza': '#FECACA', // Tom pastel para higiene
    'Eletrônicos': '#B9FBC0', // Tom pastel para eletrônicos
    'Papelaria': '#E2C4E3', // Tom pastel para papelaria
    'Diversos': '#F6F6F6' // Tom pastel para diversos
  };

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.wishList.push(
      { id: 0, name: 'Shampoo', category: 'Higiene e Beleza', purchased: false, dateAdded: new Date() },
      { id: 1, name: 'Arroz', category: 'Comida', purchased: false, dateAdded: new Date() },
      { id: 2, name: 'Detergente', category: 'Limpeza', purchased: false, dateAdded: new Date(), lastPaidAmount: 8.59 },
      { id: 3, name: 'Feijão', category: 'Comida', purchased: false, dateAdded: new Date() },
      { id: 3, name: 'Pilha', category: 'Eletrônicos', purchased: false, dateAdded: new Date() }
    );
  }

  getItemsByCategory(category: string): Item[] {
    return this.wishList.filter(item => item.category === category);
  }

  hasItemsInCategory(category: string): boolean {
    return this.getItemsByCategory(category).length > 0;
  }

  getCategoryTheme(category: string): string {
    return this.categoryThemes[category] || '#FFFFFF';
  }

  addItem(): void {
    const newId = this.wishList.length > 0 ? Math.max(...this.wishList.map(item => item.id)) + 1 : 0;
    const itemToAdd: Item = { ...this.newItem, id: newId };

    this.wishList.push(itemToAdd);

    this.newItem = { id: 0, name: '', category: 'Higiene', purchased: false, dateAdded: new Date() };
  }

  markAsPurchased(item: Item): void {
    item.purchased = !item.purchased;
    if (item.purchased) {
      item.lastPurchaseDate = new Date();
    }
  }

  openModal(item: Item): void {
    const modalRef = this.modalService.open(this.modalContent);
    modalRef.result.then((result: string) => {
      if (result === 'save') {
        const amount = (document.getElementById('paidAmount') as HTMLInputElement).value;
        item.lastPaidAmount = parseFloat(amount);
      }
    }, (reason: any) => {});
  }
}
