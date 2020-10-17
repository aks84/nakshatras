import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ashwini", symbol: "Horse Head", lord: "Ketu", deity: "Ashwini Kumar" , caste: "Merchant", aim: "Dharma", direction: "South", power: "Healing"  },
        { id: 2, name: "Bharini", symbol: "Yoni", lord: "Venus", deity: "Yama" , caste: "Outcast", aim: "Artha", direction: "West", power: "Removing"   },
        { id: 3, name: "Kritika", symbol: "Flame", lord: "Sun", deity: "Agni" , caste: "Brahmin", aim: "Karma", direction: "North", power: "Burning"   },
        { id: 4, name: "Rohini", symbol: "Cart; Chariot", lord: "Moon", deity: "Brahma" , caste: "Shudra", aim: "Moksha", direction: "East", power: "Growing"  },
        { id: 5, name: "Mrigasira", symbol: "Deer Head", lord: "Mars", deity: "Soma/Chandra"  , caste: "Farmer", aim: "Moksha", direction: "South", power: "Enjoying"  },
        { id: 6, name: "Ardra", symbol: "Teardrop; Diamond; Human Head", lord: "Rahu", deity: "Rudra"  , caste: "Butcher", aim: "Karma", direction: "West", power: "Achieving"  },
        { id: 7, name: "Punarvasu", symbol: "Bow; Potter Wheel; House", lord: "Jupiter", deity: "Aditi/mother of Gods", caste: "Merchant", aim: "Artha", direction: "North", power: "Revitalising"  },
        { id: 8, name: "Pushya", symbol: "Cow Udder; Flower; Arrow; Circle", lord: "Saturn", deity: "Brihaspati/guru of Gods" , caste: "Warrior", aim: "Dharma", direction: "East", power: "Creates Spiritual Energy" },
        { id: 9, name: "Ashlesha", symbol: "Serpent; Coiled Snake", lord: "Mercury", deity: "Sarpas/Nagas"  , caste: "Outcast", aim: "Dharma", direction: "South", power: "Destroies Spiritual Energy"  },
        { id: 10, name: "Megha", symbol: "King's Chamber with Throne; Planquin", lord: "Ketu", deity: "Pitras/ancestors"  , caste: "Shudra ", aim: "Artha", direction: "West", power: "Spiritual Rebirth"  },
        { id: 11, name: "Purva Phalguni", symbol: "Couch; Hammock; Fig Tree", lord: "Venus", deity: "Bhagya/god of marital bliss and prosperity", caste: "Brahmin ", aim: "Karma", direction: "North", power: "Procreating"  },
        { id: 12, name: "Uttara Phalguni", symbol: "Bed; Small Bed", lord: "Sun", deity: "Aryaman/god of patronage and favours" , caste: "Warrior ", aim: "Moksha", direction: "East", power: "Prospering"  },
        { id: 13, name: "Hasta", symbol: "Hand; Palm", lord: "Moon", deity: "Savita/Surya"  , caste: "Merchant ", aim: "Moksha", direction: "South", power: "Gaining" },
        { id: 14, name: "Chitra", symbol: "Bright Jewel; Pearl", lord: "Mars", deity: "Vishawakarma"  , caste: "Farmer", aim: "Karma", direction: "West", power: "Creating, Spiritual Power"  },
        { id: 15, name: "Swati", symbol: "Shoot of Plant; Coral", lord: "Rahu", deity: "Pawan/Vayu"  , caste: "Butcher", aim: "Artha", direction: "North", power: "Transforming"  },
        { id: 16, name: "Vishakha", symbol: "Decorated Gateway Garland", lord: "Jupiter", deity: "Indra and Agni" , caste: "Outcast", aim: "Dharma", direction: "East", power: "Harvesting"  },
        { id: 17, name: "Anuradha", symbol: "Triumphal Archway; Lotus Flower", lord: "Saturn", deity: "Mitra" , caste: "Shudra", aim: "Dharma", direction: "South", power: "Abundance"},
        { id: 18, name: "Jayeshtha", symbol: "Circular Talisman; Umbrells; Earring", lord: "Mercury", deity: "Indra" , caste: "Farmer ", aim: "Artha", direction: "West", power: "Heroism"   },
        { id: 19, name: "Moola", symbol: "Liontail; Elephant Goad; Tied Roots", lord: "Ketu", deity: "Nirrti/Goddess of destruction"  , caste: "Butcher ", aim: "Karma", direction: "North", power: "Clearing" },
        { id: 20, name: "Purva Ashadha", symbol: "Elephant Tusk; Monkey; Bamboo Hand Fan", lord: "Venus", deity: "Apah/God of water" , caste: "Brahmin", aim: "Moksha", direction: "East", power: "Invigorating" },
        { id: 21, name: "Uttara Ashadha", symbol: "Elephant Tust; Small Cot", lord: "Sun", deity: "Vishwadevas/Universal Gods" , caste: "Warrior", aim: "Moksha", direction: "South", power: "Victory"  },
        { id: 22, name: "Shravana", symbol: "Ear; 3 Footprints of Saraswati", lord: "Moon", deity: "Vishnu" , caste: "Outcast", aim: "Artha", direction: "North", power: "Connecting" },
        { id: 23, name: "Dhanishtha", symbol: "Flute; Mridanga; Drum", lord: "Mars", deity: "Eight Vasus"  , caste: "Farmer", aim: "Dharma", direction: "East", power: "Joining" },
        { id: 24, name: "Shatabhisha", symbol: "Circle; Garland; Hundred Flowers", lord: "Rahu", deity: "Varuna"  , caste: "Butcher", aim: "Dharma", direction: "South", power: "Healing" },
        { id: 25, name: "Purva Bhadrapada", symbol: "Sword; Double Faced Man", lord: "Jupiter", deity: "Ajaikapada/an ancient fire dragon" , caste: "Brahmin", aim: "Artha", direction: "West", power: "Upraising"   },
        { id: 26, name: "Uttara Bhadrapada", symbol: "Twins; Funeral Bed on a Cot ", lord: "Saturn", deity: "Ahirbudhanya/Ocean Serpent" , caste: "Warrior", aim: "Karma", direction: "North", power: "Stabilising"   },
        { id: 27, name: "Revati", symbol: "Pair of Fish; Drun for Beating Time", lord: "Mercury", deity: "Pushan/the protective deity"  , caste: "Shudra", aim: "Moksha", direction: "East", power: "Nourishing" }
        
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
