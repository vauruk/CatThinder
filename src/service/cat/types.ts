export interface ICatResponse {
    data: [ICat];
}

interface Image {
    id: string;
    width: number;
    height: number;
    url: string;
}
export interface ICat {
    name: string;
    id: string;
    description: string;
    image: Image;
}
