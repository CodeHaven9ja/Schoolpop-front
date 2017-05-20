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
  profile: {
    parent: {
      objectId: string;
    }
  };
  school: {
    objectId:string;
    commonName:string;
    banner: {
      url: string;
    }
  }
  isActive: boolean;
}
export class User implements IUser {
  public profile: {
    parent: {
      objectId: string;
    }
  };
  public school: {
    objectId:string;
    commonName:string;
    banner: {
      url: string;
    }
  };
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
