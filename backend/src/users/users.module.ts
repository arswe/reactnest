import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { User, UserSchema } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersResolver, UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
