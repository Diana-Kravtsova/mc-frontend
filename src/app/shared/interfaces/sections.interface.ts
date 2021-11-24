export interface SectionsInterface {
    sections: Array<section>;
}

export interface section{
    id: number;
    name: string;
    directions: Array<direction>;
}

export interface direction{
    id: number;
    name: string;
    topics: Array<topic>;
}

export interface topic{
    id: number;
    name: string;
}
