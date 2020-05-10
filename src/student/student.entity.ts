import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  kana_first_name: string;

  @Column()
  kana_last_name: string;

  @Column()
  created_datetime: string;

  @Column()
  updated_datetime: string;

  @Column()
  class_id: number;

  // @Column({ default: true })
  // isActive: boolean;
}
