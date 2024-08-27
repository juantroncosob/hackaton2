import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Asegúrate de importar PrismaModule
  controllers: [ResponsesController],
  providers: [ResponsesService],
})
export class ResponsesModule {}