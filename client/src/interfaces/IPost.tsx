import IProfile from "./IProfile";

export default interface IPost {
  profile: IProfile;
  postText: string;
  creationTime: string;
  likes: number;
}
