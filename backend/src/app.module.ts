import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rahman:rahman@cluster0.woeob7l.mongodb.net/Task_Manager-_db?retryWrites=true&w=majority&appName=Cluster0'
    ),
    TasksModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
