import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemlistComponent } from './maincomponents/itemlist/itemlist.component';
import { ItemdetailComponent } from './maincomponents/itemdetail/itemdetail.component';

const routes: Routes = [
  {
    path: '',
    component: ItemlistComponent,
  },
  {
    path: 'product/:productId',
    component: ItemdetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
