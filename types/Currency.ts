export interface ICurrency {
        id: number;
        name: string;
        buyPrice: number;
        sellPrice: number;
        isDefault: boolean;
        isDeleted: boolean;
        deletedBy: number;
        createdAt: string;
        updatedAt: string;
}