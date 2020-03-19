import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full'},
  { path: 'books', component: BookListComponent},
  { path: 'add', component: CreateBookComponent},
  { path: 'details/:id', component: BookDetailsComponent},
  { path: 'update/:id', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
