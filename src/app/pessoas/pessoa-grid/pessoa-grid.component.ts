import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-pessoa-grid',
  templateUrl: './pessoa-grid.component.html',
  styleUrls: ['./pessoa-grid.component.css']
})
export class PessoaGridComponent implements AfterViewInit {

  displayedColumns: string[] = ['nome', 'cidade', 'estado', 'status',  'acao'];
  
  @Input() dataSource: any;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource!.paginator = this.paginator;
  }

 }