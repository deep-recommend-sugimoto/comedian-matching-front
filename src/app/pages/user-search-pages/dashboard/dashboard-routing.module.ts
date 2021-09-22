import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { DashboardResolverService } from './dashboard.resolver'

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: { title: 'ダッシュボード' },
        resolve: { from: DashboardResolverService },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
