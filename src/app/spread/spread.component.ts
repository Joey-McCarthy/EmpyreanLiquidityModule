import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Result
} from '../interfaces/result';
import {
  Account
} from '../interfaces/account';
import * as GC from "@grapecity/spread-sheets";
import * as Excel from "@grapecity/spread-excelio";
import "@grapecity/spread-sheets-charts";
@Component({
  selector: 'app-detailitem',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent {
  private _data: Result[];
  private self: SpreadComponent;
  private sheet: GC.Spread.Sheets.Worksheet;
  @Input()
  set Inputitem(Inputitem: Result[]) {
    if (Inputitem != null) {
      this._data = Inputitem;
      this.setupWorkBook();
    }
  }

  Title: string;

  hostStyle = {
    width: '1000px',
    height: '700px'
  };
  private spread: GC.Spread.Sheets.Workbook;

  constructor() {}
  workbookInit(args) {

    this.self = this;
    this.self.spread = args.spread;
  }

  private setupWorkBook() {
    // LOAD JSON TEMPLATE FROM DESIGNER
    /*
     * var spreadJSON = '{"version":"11.2.0","sheetCount":2,"sheets":{"Sheet1":{"name":"Sheet1","activeRow":9,"activeCol":5,"colHeaderRowCount":2,"theme":"Office","data":{"dataTable":{"0":{"0":{"value":"Dec-15"}},"1":{"0":{"value":"Jan-16"}},"2":{"0":{"value":"Feb-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"3":{"0":{"value":"Mar-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"4":{"0":{"value":"Apr-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"5":{"0":{"value":"May-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"6":{"0":{"value":"June-16"}},"7":{"0":{"value":"July-16"}},"8":{"0":{"value":"Aug-16"}},"9":{"0":{"value":"Sep-16"}},"10":{"0":{"value":"Oct-16"}},"11":{"0":{"value":"Nov-16"}},"12":{"0":{"value":"Dec-16"}},"13":{"0":{"value":"Jan-17"}},"14":{"0":{"value":"Feb-17"}},"15":{"0":{"value":"Mar-17"}},"16":{"0":{"value":"Apr-17"}},"17":{"0":{"value":"May-17"}},"18":{"0":{"value":"June-17"}},"19":{"0":{"value":"July-17"}},"20":{"0":{"value":"Aug-17"}},"21":{"0":{"value":"Sep-17"}},"22":{"0":{"value":"Oct-17"}},"23":{"0":{"value":"Nov-17"}},"24":{"0":{"value":"Dec-17"}},"25":{"0":{"value":"Jan-18"}},"26":{"0":{"value":"Feb-18"}},"27":{"0":{"value":"Mar-18"}},"28":{"0":{"value":"Apr-18"}},"29":{"0":{"value":"May-18"}},"30":{"0":{"value":"Jun-18"}},"31":{"0":{"value":"July-18"}},"32":{"0":{"value":"Aug-18"}},"33":{"0":{"value":"Sep-18"}},"34":{"0":{"value":"Oct-18"}},"35":{"0":{"value":"Nov-18"}},"36":{"0":{"value":"Dec-18"}}},"defaultDataNode":{"style":{"themeFont":"Body"}}},"rowHeaderData":{"defaultDataNode":{"style":{"themeFont":"Body"}}},"colHeaderData":{"dataTable":{"0":{"0":{"value":"Date"},"1":{"value":"BSTarget"},"2":{"value":"AvgFace"},"3":{"value":"AvgYield"},"4":{"value":"EOPFace"},"5":{"value":"EOPCoupon"},"6":{"value":"MktVal"}}},"defaultDataNode":{"style":{"themeFont":"Body"}}},"rows":[{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true}],"columns":[{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":73,"visible":true,"resizable":true},{"size":78,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true}],"rowHeaderColInfos":[{"size":40,"visible":true,"resizable":true}],"colHeaderRowInfos":[{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true}],"selections":{"0":{"row":9,"rowCount":1,"col":5,"colCount":1},"length":1},"sheetAreaOffset":{"left":0,"top":0,"_left":0,"_top":0},"index":0},"Sheet2":{"name":"Sheet2","theme":"Office","data":{"dataTable":{}},"rowHeaderData":{},"colHeaderData":{},"selections":{"0":{"row":0,"rowCount":1,"col":0,"colCount":1},"length":1},"sheetAreaOffset":{"left":0,"top":0,"_left":0,"_top":0},"index":1}}}';
     * this.self.spread.fromJSON(JSON.parse(spreadJSON));
     */

    this.Title = localStorage.getItem('currentAccount');
    this.self.spread.name = this.Title;
    
    this.sheet = this.self.spread.getActiveSheet();
    var spreadNS = GC.Spread.Sheets;
    // OR SET UP SHEET MANUALLY
    this.sheet.setRowCount(2, spreadNS.SheetArea.colHeader);
    this.sheet.setRowCount(this._data.length);

    // var obj = JSON.parse(this._data);
    // console.log(Object.keys(this._data));
    console.log(this._data);

    this.sheet.autoGenerateColumns = true;
    this.sheet.setDataSource(this._data);
    this.sheet.suspendPaint();
    this.sheet.defaults.rowHeight = 40;
    this.sheet.defaults.colWidth = 110;
    this.sheet.resumePaint();


  }
  ngOnInit() {

  }
}