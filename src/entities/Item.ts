import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "item" })
export class Item {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  code: string;

  @Column()
  itemCode: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  keyCode: string;

  @Column("decimal", {
    precision: 20,
    scale: 4,
    default: 0,
  })
  balance: number;

  @Column({ nullable: true, type: "numeric" })
  buyingPrice: number;

  @Column({ nullable: true })
  sellingPriceRetail: number;

  @Column({ nullable: true })
  sellingPriceWholesale: number;

  @Column({ nullable: true })
  minimumStockLevel: number;

  @Column({ nullable: true })
  maxStockLevel: number;

  @Column({ nullable: true })
  point: number;

  @Column({ default: 2 })
  cashScoreForRef: number;

  @Column({ default: 1 })
  creditScoreForRef: number;

  @Column("text", { nullable: true })
  itemPic: string;

  @Column({ nullable: true })
  sellingPriceLoose: number;

  @Column({ nullable: true })
  deception: string;

  @Column({ nullable: true })
  otherItemName: string;

  @Column({ nullable: true, type: "numeric", default: 0 })
  retailSpecialDiscount: number;

  @Column({ nullable: true, type: "numeric", default: 0 })
  wholesaleSpecialDiscount: number;

  @Column({ nullable: true, type: "date", default: null })
  hideAt: Date | null = null;
  
  @Column({
    type: "boolean",
    default: false,
  })
  vatEnabled: boolean;
  get itemName() {
    return this.name;
  }
}
