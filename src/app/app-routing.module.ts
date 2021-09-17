import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddBookComponent} from './add-book/add-book.component';
import { GetBooksComponent } from './get-books/get-books.component';

const routes: Routes = [
  {path:"add-book", component: AddBookComponent},
  {path:"get-books", component: GetBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
