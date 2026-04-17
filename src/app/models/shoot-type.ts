export interface ShootType {
    id: string,
    firstName: string,
    lasName: string,
    phone: string,
    insta: string, //@
    date: Date, //idk if this is right
    locations: string,
    status: shootStatus,
    type: shootType,
    package: shootPackage //need to figure out how to get pricing tied into this
}

export type shootStatus = 'Completed' | 'In Works';

export type shootType =
    | 'memories that last'
    | 'a family kind of love'
    | 'throw the tassel'
    | 'wedding';

export type shootPackage =
    | 'wild flower'
    | 'marigold'
    | 'honey'
    | 'collection 1'
    | 'collection 2'
    | 'collection 3';

export const sampleShoots: ShootType[] = [
    {
        id: 'shoot-001',
        firstName: 'Jamie',
        lasName: 'Carter',
        phone: '555-0142',
        insta: '@jamiecarter',
        date: new Date('2026-04-27T15:00:00'),
        locations: 'Golden Gate Park',
        status: 'In Works',
        type: 'memories that last',
        package: 'wild flower',
    },
    {
        id: 'shoot-002',
        firstName: 'Sophia',
        lasName: 'Nguyen',
        phone: '555-0198',
        insta: '@sophianguyen',
        date: new Date('2026-05-03T10:30:00'),
        locations: 'North Beach',
        status: 'In Works',
        type: 'a family kind of love',
        package: 'marigold',
    },
    {
        id: 'shoot-003',
        firstName: 'Mason',
        lasName: 'Reed',
        phone: '555-0127',
        insta: '@masonreedphoto',
        date: new Date('2026-05-11T18:00:00'),
        locations: 'Mission District',
        status: 'Completed',
        type: 'throw the tassel',
        package: 'collection 1',
    },
    {
        id: 'shoot-004',
        firstName: 'Ava',
        lasName: 'Patel',
        phone: '555-0176',
        insta: '@avapatelstudio',
        date: new Date('2026-05-19T12:00:00'),
        locations: 'Crissy Field',
        status: 'In Works',
        type: 'wedding',
        package: 'collection 2',
    },
];


