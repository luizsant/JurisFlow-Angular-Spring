import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = true; // Adiciona uma propriedade para controlar o estado de expansão

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isExpanded = !this.isExpanded; // Alterna o estado de expansão
  }
}
