import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    birthDate: Date

    @Column()
    height: number // cm
}
