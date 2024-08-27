import { Module } from '@nestjs/common';
import { ResponsesModule } from './responses/responses.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ResponsesModule, PrismaModule], // Importa PrismaModule aquí también
  controllers: [],
  providers: [],
})
export class AppModule {}