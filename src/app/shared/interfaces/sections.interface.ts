export interface SectionsInterface {
    sections: Array<Section>;
}

export interface Section{
    id: number;
    name: string;
    directions: Array<Direction>;
}

export interface Direction {
    id: number;
    name: string;
    topics: Array<Topic>;
}

export interface Topic {
    id: number;
    name: string;
}
