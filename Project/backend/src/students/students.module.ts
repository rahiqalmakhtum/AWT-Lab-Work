import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentEntity } from './student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([studentEntity])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
