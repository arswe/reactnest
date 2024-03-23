import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, UserRepository],
})
export class UsersModule {}
