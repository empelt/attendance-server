import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  created_datetime: string;

  @Column()
  updated_datetime: string;

  @Column()
  user_id: number;
  // @Column({ default: true })
  // isActive: boolean;
}
