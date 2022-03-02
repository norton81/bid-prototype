import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'rec_entities1',
        loadChildren: () => import('donor/entity1Module').then(m => m.Entity1Module),
    },
    {
        path: 'rec_entities2',
        loadChildren: () => import('donor/entity2Module').then(m => m.Entity2Module),
    },
    {
        path: 'rec_entities3',
        loadChildren: () => import('donor/entity3Module').then(m => m.Entity3Module),
    },
    {
        path: 'rec_entities4',
        loadChildren: () => import('donor/entity4Module').then(m => m.Entity4Module),
    },
    {
        path: 'rec_entities5',
        loadChildren: () => import('donor/entity5Module').then(m => m.Entity5Module),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
