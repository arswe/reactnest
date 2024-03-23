import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config } from 'migrate-mongo';

@Injectable()
export class DbMigrationService implements OnModuleInit {
  private readonly dbMigrationService: Partial<config.Config> = {
    mongodb: {
      databaseName: this.configService.getOrThrow('DB_NAME'),
      url: this.configService.getOrThrow('MONGODB_URI'),
    },
    migrationsDir: `${__dirname}../../migrations`,
    changelogCollectionName: 'changelog',
  };

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    console.log('Running database migrations...');
    // Run your database migrations here
    console.log('Database migrations complete');
  }
}
