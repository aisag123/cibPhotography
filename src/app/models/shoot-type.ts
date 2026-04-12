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

export type shootStatus = 'Competed' | 'In Works';

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


