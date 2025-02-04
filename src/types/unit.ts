export type UnitType = {
    id: number;
    title: string;
    description: string;
    price: number;
    kitchen: number;
    hall: number;
    bedrooms: number;
    balcony: number;
    bathrooms: number;
    swimming_pool: number;
    grill: number;
    garden: number;
    images: string[];
    ratings: Rating[];
}

export type Rating = {
    id: number;
    rate: number;
    username: string;
    img: string;
    date: string;
    comment: string;
}