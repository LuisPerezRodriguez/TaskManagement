import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterLink],
})
export class HomeModule {}
