import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<Users> {
    var now = new Date();
    
    const user = new Users();
    user.id = createUserDto.id;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    user.created_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    user.updated_datetime = now
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    user.user_id = createUserDto.user_id;
    return this.usersRepository.save(user);
  }

  update(updateUserDto: UpdateUserDto): Promise<Users> {
    const user = new Users();
    //クライアントからの取得したIDを元にユーザを検索
    //クライアントから取得したパラメータを設定


    return this.usersRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
