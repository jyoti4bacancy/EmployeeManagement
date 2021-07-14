import {Entity, PrimaryGeneratedColumn, Column, Double} from "typeorm";


@Entity({name:"Employees"})
export class Employee {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar",{length:30})
    firstName: string;

    @Column("varchar",{length:30})
    lastName: string;

    @Column({nullable:false})
    emailId: string;

    @Column({nullable:false,length:8})
    password: string;

    @Column("varchar",{length:20})
    role: string

    @Column()
    dob: Date;

    @Column({type: "double"})
    mobileNo: number;

    @Column()
    gender: string;
}
