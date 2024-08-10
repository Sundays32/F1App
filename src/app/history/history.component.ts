import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as driversChampions from './driversChampions.json';
import * as constructorsChampions from './constructorsChampions.json';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  displayedColumns: string[] = ['year', 'driver', 'team'];
  displayedColumnsConst: string[] = ['year', 'team'];
  dataSource = new MatTableDataSource(driversChampions);
  dataSourceConstChamp = new MatTableDataSource(constructorsChampions);
}
