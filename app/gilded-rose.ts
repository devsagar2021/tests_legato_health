export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
      this.items = items;
  }

  updateQuality() {
    const res = this.items.map(item => {
        let { name, quality, sellIn } = item;
        if (name !== 'Sulfuras, Hand of Ragnaros') {
          if (name !== 'Aged Brie' && name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (quality > 0) quality -= 1;
            if (sellIn >= 0) sellIn -= 1;
            if (sellIn < 0 && quality > 0) quality -= 1;
            if (name === "Conjured Mana Cake") {
              if (quality > 0) quality -= 1;
              if (sellIn < 0 && quality > 0) quality -= 1;
            }
          } else {
            if (quality < 50) quality += 1;
            if (sellIn >= 0) sellIn -= 1;
            if (name === 'Backstage passes to a TAFKAL80ETC concert') {
              if (sellIn < 11 && quality < 50) quality += 1;
              if (sellIn < 6 && quality < 50) quality += 1;
              if (sellIn < 0) quality = 0;
            } else {
              if (sellIn < 0 && quality < 50) quality += 1;
            }
          }
        }

        return { name, sellIn, quality } as Item
    })

    this.items = res
  }

  // updateQuality() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1
  //         }
  //       }
  //     } else if (this.items[i].quality < 50) {
  //       this.items[i].quality = this.items[i].quality + 1
  //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //         if (this.items[i].sellIn < 11) {
  //           if (this.items[i].quality < 50) {
  //             this.items[i].quality = this.items[i].quality + 1
  //           }
  //         }
  //         if (this.items[i].sellIn < 6) {
  //           if (this.items[i].quality < 50) {
  //             this.items[i].quality = this.items[i].quality + 1
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality
  //         }
  //       } else if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1
  //       }
  //     }
  //   }

  //   return this.items
  // }
}
