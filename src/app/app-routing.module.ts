import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DashboardComponent } from "./layouts/dashboard/dashboard.component"
import { DefaultComponent } from "./layouts/default/default.component"
import { PostsComponent } from "./modules/posts/posts.component"

const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
        path: '',
        component: PostsComponent
    }, {
        path: 'posts',
        component: PostsComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {

}