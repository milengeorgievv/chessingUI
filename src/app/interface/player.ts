import { Status } from "../enum/status.enum";


export interface Player {
    id: number;
    name: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    rating: number;
    dateOfRegistration: Date;
    status: Status;
}