import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { UsersController } from 'src/controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
