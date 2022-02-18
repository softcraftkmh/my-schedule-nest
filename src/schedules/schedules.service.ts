import { Injectable, NotFoundException } from '@nestjs/common';
import { WEEKLY_SCHEDULE } from 'src/data/schedule';
import { setTimeout } from 'timers/promises';

@Injectable()
export class SchedulesService {
  create() {
    return 'This action adds a new schedule';
  }

  async findAll() {
    await setTimeout(3000);
    return WEEKLY_SCHEDULE;
  }

  findOne(title: string) {
    const result = WEEKLY_SCHEDULE.find((schedule) => schedule.title === title);
    if (!result) {
      return new NotFoundException();
    }
    return result;
  }

  update() {
    return `This action updates schedules`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
