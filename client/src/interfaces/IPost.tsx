import IProfile from "./IProfile";

export default interface IPost {
  id: number;
  authorId: number;
  postText: string;
  creationTime: string;
  postImg: string;
  likes: number;
}
