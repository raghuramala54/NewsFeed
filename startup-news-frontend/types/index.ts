export interface NewsArticle {
    id: number;
    title: string;
    summary: string;
    content?: string;
    published_at: string;
    startup?: {
        id: number;
        name: string;
        website?: string;
    };
}
