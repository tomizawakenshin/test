import { User } from "./user";

export interface Hanabi {
  ID: number;
  Name: string;
  Discription: string;
  Photo: string;
  UserID: number;
  User: User;
  Tag: string;
  CommentCount: number;
  Comments: Comment[];
}