import { ForMonitoring } from "../../ports/drivens/for-monitoring";

export class MonitorStubAdapter implements ForMonitoring {
  log(event: string, message: string) {
    console.log(event, message);
  }
}
