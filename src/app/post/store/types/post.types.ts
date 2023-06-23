export interface Post{
    id?: string,
    title:string,
    description: string
}

export interface postState{
    posts: Post[]
}
export interface postSelector{
    posts: any[]; 
}
