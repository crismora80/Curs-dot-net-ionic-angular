import { Comment } from './comment.model';

export class ProductWithComments {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  Comments: Array<Comment>;
}
