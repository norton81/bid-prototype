import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'entities1',
        loadChildren: () => import('donor/entity1Module').then(m => m.Entity1Module),
    },
    {
        path: 'entities2',
        loadChildren: () => import('donor/entity2Module').then(m => m.Entity2Module),
    },
    {
        path: 'entities3',
        loadChildren: () => import('donor/entity3Module').then(m => m.Entity3Module),
    },
    {
        path: 'entities4',
        loadChildren: () => import('donor/entity4Module').then(m => m.Entity4Module),
    },
    {
        path: 'entities5',
        loadChildren: () => import('donor/entity5Module').then(m => m.Entity5Module),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
