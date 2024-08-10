import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import * as driverStandings from './driverStandings.json'
import * as constructorsStandings from './constructorsStandings.json'

@Component({
  selector: 'app-last-season',
  templateUrl: './last-season.component.html',
  styleUrls: ['./last-season.component.scss']
})
export class LastSeasonComponent {
  displayedColumns: string[] = ['rank', 'country', 'driver','team','points','wins','podiums'];
  displayedColumnsConst: string[] = ['rank', 'team', 'points','wins','podiums'];
  dataSource = new MatTableDataSource(driverStandings);
  dataSourceConstChamp = new MatTableDataSource(constructorsStandings);
}
