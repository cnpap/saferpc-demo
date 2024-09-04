import { Body, Controller, Get, Param, Query } from '@nestjs/common'
import type { AppService } from './app.service'

interface DemoBody {
  a1: string
  a2: string

  nested: {
    b1: string
    b2: string
  }
}

interface DemoQuery {
  id: string
}

interface DemoParams {
  name: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/demo')
  getDemo(@Body() body: DemoBody, @Query() query: DemoQuery, @Param() params: DemoParams) {
    return {
      query: query.id,
      message: body.a2,
      name: params.name,
    }
  }
}
