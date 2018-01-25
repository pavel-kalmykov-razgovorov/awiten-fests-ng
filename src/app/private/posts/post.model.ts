export class Post {
  public id: number;
  public title: string;
  public lead: string;
  public body: string;

  constructor(
    id: number,
    title: string,
    lead: string,
    body: string) {
    this.id = id;
    this.title = title;
    this.lead = lead;
    this.body = body;
  }
}
