import { SharedMenuNode } from "@monorepo/shared";

export const MENU_DATA: SharedMenuNode[] = [
    {
        name: 'EntitiesGroup1',
        children: [
            {
                name: 'Entities1',
                rout: 'entities1',
            },
            {
                name: 'Entities2',
                rout: 'entities2',
            },
            {
                name: 'Entities3',
                rout: 'entities3',
            }],
    },
    {
        name: 'EntitiesGroup2',
        children: [
            {
                name: 'Entities4',
                rout: 'entities4',
            },
            {
                name: 'Entities5',
                rout: 'entities5',
            },
        ],
    },
];
