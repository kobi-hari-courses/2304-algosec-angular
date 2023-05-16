import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/pages/not-found/not-found.component";
import { PageAComponent } from "./components/pages/page-a/page-a.component";
import { PageBComponent } from "./components/pages/page-b/page-b.component";
import { PageCComponent } from "./components/pages/page-c/page-c.component";

const routes: Routes = [
    {path: '', redirectTo: 'page-a', pathMatch: 'full'}, 
    {path: 'page-a', component: PageAComponent}, 
    {path: 'page-b', component: PageBComponent}, 
    {path: 'page-c', component: PageCComponent}, 
    {path: '**', component: NotFoundComponent}
  ]  

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}