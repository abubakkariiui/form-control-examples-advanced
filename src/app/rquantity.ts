import { ReportingQuantityByYear } from './year';
export class ReportingQuantity {
  type?: string;
  reportingQuantityType2019 = new ReportingQuantityByYear(2019);
  reportingQuantityType2020 = new ReportingQuantityByYear(2020);
  reportingQuantityType2021 = new ReportingQuantityByYear(2021);
  reportingQuantityType2022 = new ReportingQuantityByYear(2022);
  constructor() {
    this.type = '';
  }
}