export interface Product {
    id: string,
    title: string,
    description: string,
    pictures: {
        url: string,
        isThumbnail: boolean
    }[],
    color: string,
    category: string,
    brand: string,
    materials: string[],
    price: number,
    discount: number
}