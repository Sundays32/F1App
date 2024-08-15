import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as driverStandings from './driverStandings.json';
import * as constructorsStandings from './constructorsStandings.json';

@Component({
  selector: 'app-current-season',
  templateUrl: './current-season.component.html',
  styleUrls: ['./current-season.component.scss']
})
export class CurrentSeasonComponent {
  displayedColumns: string[] = ['rank', 'country', 'driver','team','points','wins','podiums'];
  displayedColumnsConst: string[] = ['rank', 'team', 'points','wins','podiums'];
  dataSource = new MatTableDataSource(driverStandings);
  dataSourceConstChamp = new MatTableDataSource(constructorsStandings);
}
