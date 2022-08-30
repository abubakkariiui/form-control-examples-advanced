import { ReportingQuantity } from './rquantity';
import { Document } from "./doc";

export class TableUtils {
    static attachDocument(documentList: Document[]): void {
      let nextIndex = documentList.length + 1;
      documentList.push({
        fileName: 'test' + nextIndex + '.pdf',
        documentType: 'Test Form',
        isCBI: false,
        isSelected: false
      });
    }
  
    static removeDocument(documentList: Document[], index: number) {
      documentList.splice(index, 1);
    }
  
    static removeReportingQuantity(reportingQuantities: ReportingQuantity[], index: number) {
      reportingQuantities.splice(index, 1);
    }
  }