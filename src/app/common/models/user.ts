interface IUser {
  objectId: string;
  username: string;
  email: string;
  role: string;
  sessionToken: string;
  firstName: string;
  lastName: string;
  img: {
    url: string;
  };
  isActive: boolean;
}
export class User implements IUser {
  firstName: string;
  lastName: string;
  img: { url: string; };
  isActive: boolean;
  objectId: string;
  username: string;
  email: string;
  role: string;
  sessionToken: string;

}
