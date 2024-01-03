export type ListItem = {
    title: string;
    link: string;
}

export type GroupObject = {
    id: number;
    isOpen: boolean;
    group: string;
    list: ListItem[]
}