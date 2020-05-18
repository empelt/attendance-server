import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  created_datetime: string;

  @Column()
  updated_datetime: string;

  @Column()
  grade: number;

  // @Column({ default: true })
  // isActive: boolean;
}
