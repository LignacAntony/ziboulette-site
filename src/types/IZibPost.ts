export interface IZibnewsPost {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    image: string;
}

export interface IZibunityPost {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
}

type TPost = IZibnewsPost | IZibunityPost;


export function isZibnewsPost(post: TPost): post is IZibnewsPost {
    return (post as IZibnewsPost).image !== undefined;
}