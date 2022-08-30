export class ReportingQuantityByYear {
    year?: number;
    isChecked: boolean = false;
    quantity?: number;
    asbestosProcessingMethod?: string;
    dispositionOfMinedOrMilledAsbestos?: string;
    asbestosPercentage?: number;
    asbestosType?: string;
    constructor(year: number) {
      this.year = year !== null ? year : 2019;
      this.isChecked = false;
      this.quantity = 0;
    }
  }