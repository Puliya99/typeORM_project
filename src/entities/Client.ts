import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person";
import { Banker } from "./Banker";

interface AdditionalInfo {
    age: number;
    hair_color: string;
}

@Entity('client', {
    schema: "new_schema",
})
export class Client extends Person {

    @Column({
        type: "numeric"
    })
    balance: number;

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info: AdditionalInfo;

    @Column({
        type: "simple-array",
        default: []
    })
    family_members: string[];

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[];

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
