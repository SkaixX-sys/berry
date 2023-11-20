import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';

class HelloWordDto {
  @ApiProperty()
  message: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private DbService: DbService) { }

  @Get()
  @ApiOkResponse({
    type: HelloWordDto
  })
  async getHello(): Promise<HelloWordDto> {
    const user = await this.DbService.user.findMany({})
    console.log(user);

    return { message: this.appService.getHello() }
  }
}
