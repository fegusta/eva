export interface Item {
    id: number;
    name: string;
    category: string;
    purchased: boolean;
    lastPaidAmount?: number;
    dateAdded: Date;
    lastPurchaseDate?: Date;
  }
  