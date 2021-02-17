import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LigaChampionsPage } from './liga-champions.page';

const routes: Routes = [
  {
    path: '',
    component: LigaChampionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LigaChampionsPage]
})
export class LigaChampionsPageModule {}
