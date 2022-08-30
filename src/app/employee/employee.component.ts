import { FormGroup } from '@angular/forms';
import { TableUtils } from './../table-utils';
import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../doc';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  tableUtils = TableUtils;
  @Input() isBulkAsbestos!: boolean;
  @Input() employeeInvolvementOptions!: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  getAttachedDocumentsToUpload(): Document[] {
    return this.employeeInvolvementOptions.controls['attachedDocuments']
      .value as Document[];
  }
}
