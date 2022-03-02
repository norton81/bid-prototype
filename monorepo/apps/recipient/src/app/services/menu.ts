import { SharedMenuNode } from "@monorepo/shared";

export const MENU_DATA: SharedMenuNode[] = [
    {
        name: 'Rec_EntitiesGroup1',
        children: [
            {
                name: 'Rec_Entities1',
                rout: 'rec_entities1',
            },
            {
                name: 'Rec_Entities2',
                rout: 'rec_entities2',
            },
            {
                name: 'Rec_Entities3',
                rout: 'rec_entities3',
            }],
    },
    {
        name: 'Rec_EntitiesGroup2',
        children: [
            {
                name: 'Rec_Entities4',
                rout: 'rec_entities4',
            },
            {
                name: 'Rec_Entities5',
                rout: 'rec_entities5',
            },
        ],
    },
];
