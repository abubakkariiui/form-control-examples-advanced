import { ReportingQuantity } from './rquantity';
import { TableUtils } from './table-utils';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constants = ['Asbestos','test'];
  tableUtils = TableUtils;

  minedOrMilledOptions: FormGroup = this.fb.group({
    isBulkAsbestos: new FormControl(false),
    isBulkMaterialsWithAsbestos: new FormControl(false),
    awareOfAsbestosAmtInProduct: new FormControl(false),
    awareOfBulkMaterialsAmtInProduct: new FormControl(false),
    asbestosBulkQuantities: this.fb.array([]),
    bulkMaterialQuantities: this.fb.array([])
  })

  bulkAsbestosEmployeeInvolvementOptions: FormGroup = this.fb.group({
    isPPEMiningUsed: new FormControl(null),
    typeOfMiningPPEUsed: new FormControl(null),
    isPPEMillingUsed: new FormControl(null),
    typeOfMillingPPEUsed: new FormControl(null),
    numberOfMiningEmployees: new FormControl(null),
    numberOfMillingEmployees: new FormControl(null),
    attachedDocuments: this.fb.array([])
  })

  bulkMaterialsEmployeeInvolvementOptions: FormGroup = this.fb.group({
    isPPEMiningUsed: new FormControl(null),
    typeOfMiningPPEUsed: new FormControl(null),
    isPPEMillingUsed: new FormControl(null),
    typeOfMillingPPEUsed: new FormControl(null),
    numberOfMiningEmployees: new FormControl(null),
    numberOfMillingEmployees: new FormControl(null),
    attachedDocuments: this.fb.array([])
  })

  testResultsOptions: FormGroup = this.fb.group({
    receivedTestResults: new FormControl(null),
    methodOfKnowingAmountOfAsbestos: new FormControl(null),
    frequencyOfAsbestosTesting: new FormControl(null),
    methodOfDeterminingAsbestosContent: new FormControl(null),
    typeOfTest: new FormControl(null),
    testResults: new FormControl(null),
    testResultDocuments: this.fb.array([])
  })

  checkAwareStatus(): void {
    if (this.getIsBulkAsbestos() && !this.getIsBulkMaterials()) {
      this.minedOrMilledOptions.controls['awareOfAsbestosAmtInProduct'].patchValue(new FormControl(false));
      this.minedOrMilledOptions.controls['awareOfAsbestosAmtInProduct'].markAsPristine();
    }
  }

  getIsBulkMaterials(): boolean {
    return this.minedOrMilledOptions.controls['isBulkMaterialsWithAsbestos'].value;
  }

  getIsBulkAsbestos(): boolean {
    return this.minedOrMilledOptions.controls['isBulkAsbestos'].value;
  }

  getAttachedBulkAsbestosDocumentsToUpload(): Document[] {
    return this.bulkAsbestosEmployeeInvolvementOptions.controls['attachedDocuments'].value as Document[];
  }

  getAttachedBulkMaterialsDocumentsToUpload(): Document[] {
    return this.bulkMaterialsEmployeeInvolvementOptions.controls['attachedDocuments'].value as Document[];
  }

  getTestResultDocuments(): Document[] {
    return this.testResultsOptions.controls['testResultDocuments'].value as Document[];
  }

  getAsbestosBulkQuantities(): ReportingQuantity[] {
    return this.minedOrMilledOptions.controls['asbestosBulkQuantities'].value as ReportingQuantity[];
  }

  getBulkMaterialQuantities(): ReportingQuantity[] {
    return this.minedOrMilledOptions.controls['bulkMaterialQuantities'].value as ReportingQuantity[];
  }

  getMinedOrMilledOptions():{ [key: string]: AbstractControl; } {
    return this.minedOrMilledOptions.controls;
  }

  getTestResultsOptions(): { [key: string]: AbstractControl; } {
    return this.testResultsOptions.controls;
  }

  getBulkAsbestosEmployeeInvolvementOptions(): { [key: string]: AbstractControl; } {
    return this.bulkAsbestosEmployeeInvolvementOptions.controls;
  }

  getBulkMaterialsEmployeeInvolvementOptions(): { [key: string]: AbstractControl; } {
    return this.bulkMaterialsEmployeeInvolvementOptions.controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewAsbestosType(): void {
    this.getAsbestosBulkQuantities().push(new ReportingQuantity());
  }

  addNewBulkMaterials(): void {
    this.getBulkMaterialQuantities().push(new ReportingQuantity());
  }

  toggleControls(reportingQuantities: ReportingQuantity[], index: number, year: number): void {
    if (Object.is(year, reportingQuantities[index].reportingQuantityType2019.year)) {
      reportingQuantities[index].reportingQuantityType2019.isChecked = !reportingQuantities[index].reportingQuantityType2019.isChecked;
    }
    if (Object.is(year, reportingQuantities[index].reportingQuantityType2020.year)) {
      reportingQuantities[index].reportingQuantityType2020.isChecked = !reportingQuantities[index].reportingQuantityType2020.isChecked;
    }
    if (Object.is(year, reportingQuantities[index].reportingQuantityType2021.year)) {
      reportingQuantities[index].reportingQuantityType2021.isChecked = !reportingQuantities[index].reportingQuantityType2021.isChecked;
    }
    if (Object.is(year, reportingQuantities[index].reportingQuantityType2022.year)) {
      reportingQuantities[index].reportingQuantityType2022.isChecked = !reportingQuantities[index].reportingQuantityType2022.isChecked;
    }
  }

}
