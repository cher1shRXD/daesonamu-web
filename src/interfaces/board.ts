import { User } from "./user";

export interface Board {
  id:number;
  title:string;
  detail:string;
  createdAt:string;
  author?:User;
}