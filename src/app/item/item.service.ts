import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ashwini", lord: "Ketu", deity: "Ashwini Kumar" },
        { id: 2, name: "Bharini", lord: "Venus", deity: "Yama" },
        { id: 3, name: "Kritika", lord: "Sun", deity: "Agni" },
        { id: 4, name: "Rohini", lord: "Moon", deity: "Brahma" },
        { id: 5, name: "Mrigasira", lord: "Mars", deity: "Soma/Chandra" },
        { id: 6, name: "Ardra", lord: "Rahu", deity: "Rudra" },
        { id: 7, name: "Punarvasu", lord: "Jupiter", deity: "Aditi/mother of Gods" },
        { id: 8, name: "Pushya", lord: "Saturn", deity: "Brihaspati/guru of Gods" },
        { id: 9, name: "Ashlesha", lord: "Mercury", deity: "Sarpas/Nagas" },
        { id: 10, name: "Megha", lord: "Ketu", deity: "Pitras/ancestors" },
        { id: 11, name: "Purva Phalguni", lord: "Venus", deity: "Bhagya/god of marital bliss and prosperity" },
        { id: 12, name: "Uttara Phalguni", lord: "Sun", deity: "Aryaman/god of patronage and favours" },
        { id: 13, name: "Hasta", lord: "Moon", deity: "Savita/Surya" },
        { id: 14, name: "Chitra", lord: "Mars", deity: "Vishawakarma" },
        { id: 15, name: "Swati", lord: "Rahu", deity: "Pawan/Vayu" },
        { id: 16, name: "Vishakha", lord: "Jupiter", deity: "Indra and Agni" },
        { id: 17, name: "Anuradha", lord: "Saturn", deity: "Mitra" },
        { id: 18, name: "Jayeshtha", lord: "Mercury", deity: "Indra" },
        { id: 19, name: "Moola", lord: "Ketu", deity: "Nirrti/Goddess of destruction" },
        { id: 20, name: "Purva Ashadha", lord: "Venus", deity: "Apah/God of water" },
        { id: 21, name: "Uttara Ashadha", lord: "Sun", deity: "Vishwadevas/Universal Gods" },
        { id: 22, name: "Shravana", lord: "Moon", deity: "Vishnu" },
        { id: 23, name: "Dhanishtha", lord: "Mars", deity: "Eight Vasus" },
        { id: 24, name: "Shatabhisha", lord: "Rahu", deity: "Varuna" },
        { id: 25, name: "Purva Bhadrapada", lord: "Jupiter", deity: "Ajaikapada/an ancient fire dragon" },
        { id: 26, name: "Uttara Bhadra", lord: "Saturn", deity: "Ahirbudhanya/Ocean Serpent" },
        { id: 27, name: "Revati", lord: "Mercury", deity: "Pushan/the protective deity" },
        { id: 28, name: "Abhijit", lord: "Mercury", deity: "Bramha" }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
