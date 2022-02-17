import { Injectable, NotFoundException } from '@nestjs/common';
import { WEEKLY_SCHEDULE } from 'src/data/schedule';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class SchedulesService {
  create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  findAll() {
    return WEEKLY_SCHEDULE;
  }

  findOne(title: string) {
    const result = WEEKLY_SCHEDULE.find((schedule) => schedule.title === title);
    if (!result) {
      return new NotFoundException();
    }
    return result;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
