import {JsonData} from '@/_model/json-data';

export class InsulinData extends JsonData {
  raw: any;
  _id: String;
  displayName: String;
  name: String;
  pharmacyProductNumber: String[] = [];
  enabled: boolean;
  type: String;
  IOB1Min: number[] = [];

  constructor() {
    super();
  }

  static fromJson(json: any): InsulinData {
    const ret = new InsulinData();
    ret.raw = json;
    if (json == null) {
      return ret;
    }
    ret._id = JsonData.toText(json._id);
    ret.displayName = JsonData.toText(json.displayName);
    ret.name = JsonData.toText(json.name);
    ret.type = JsonData.toText(json.type);
    ret.enabled = JsonData.toBool(json.enabled);
    for (const entry of json.IOB1Min ?? []) {
      ret.IOB1Min.push(JsonData.toNumber(entry));
    }
    for (const entry of json.pharmacyProductNumber ?? []) {
      ret.pharmacyProductNumber.push(JsonData.toText(entry));
    }
    return ret;
  }
}
