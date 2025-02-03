import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SearchBarComponent,
    NavBarComponent,
    Error404Component,
    LoadingComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SearchBarComponent,
    NavBarComponent,
    Error404Component,
    LoadingComponent,
  ],
})
export class SharedModule {}
