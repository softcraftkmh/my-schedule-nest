import { Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  create() {
    return this.schedulesService.create();
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.schedulesService.findOne(title);
  }

  @Put()
  update() {
    return this.schedulesService.update();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(+id);
  }
}
