import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({

  imports: [

    GraphQLModule.forRoot<ApolloDriverConfig>({

      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

    }),

    TypeOrmModule.forRoot({

      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: '20d191080',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,

    }),

    EmployeeModule,

    ProjectModule

  ],

})
export class AppModule { }
