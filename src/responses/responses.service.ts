import { Injectable } from '@nestjs/common';
import { CreateResponseDto } from './dto/create-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResponsesService {

  constructor(private prisma: PrismaService) {}


  //metodo para crear response
  async create(createResponseDto: CreateResponseDto) {
    await this.prisma.response.create({
      data: {
        firstName: createResponseDto.firstName,
        lastName: createResponseDto.lastName,
        company: createResponseDto.company,
        email: createResponseDto.email,
        phone_number: createResponseDto.phone_number,
        messege: createResponseDto.message,
        country: createResponseDto.country,
      },
    })
  }

  
}
