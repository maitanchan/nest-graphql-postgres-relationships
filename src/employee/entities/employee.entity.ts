import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from '../../project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employees' })
@ObjectType()
export class Employee {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column()
    designation: string

    @Field({ nullable: true })
    @Column({ nullable: true })
    city: string

    @Field(() => Project)
    @ManyToOne(() => Project, project => project.employees)
    project: Project

    @Field()
    @Column()
    projectId: string

}
