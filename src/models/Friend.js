export default class Friend {
  name: string;
  distance: string;
  status: string;
  message: string;

  constructor(
    name="",
    distance="",
    status="",
    message="") {
      this.name = name;
      this.distance = distance;
      this.status = status;
      this.message = message;
  }
}
