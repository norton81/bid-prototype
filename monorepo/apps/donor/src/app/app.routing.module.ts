import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'entities1',
        loadChildren: () => import('./entity1/entity1.module').then(m => m.Entity1Module),
    },
    {
        path: 'entities2',
        loadChildren: () => import('./entity2/entity2.module').then(m => m.Entity2Module),
    },
    {
        path: 'entities3',
        loadChildren: () => import('./entity3/entity3.module').then(m => m.Entity3Module),
    },
    {
        path: 'entities4',
        loadChildren: () => import('./entity4/entity4.module').then(m => m.Entity4Module),
    },
    {
        path: 'entities5',
        loadChildren: () => import('./entity5/entity5.module').then(m => m.Entity5Module),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
