import { Module } from '@nestjs/common';
import { HealthModule } from './domain/health';

@Module({
  imports: [HealthModule]
})
export class ApplicationModule {}
