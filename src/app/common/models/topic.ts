export class Topic {
  objectId: string;
  title: string;

  setObjectId(id:string): Topic {
    this.objectId = id;
    return this;
  }

  setTitle(t:string) {
    this.title = t;
    return this;
  }
}