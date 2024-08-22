export interface ContentState {
    name: string;
    username: string;
    message: string;
    profileImage: string;
    backgroundColor: string;
    pattern: number;
    designMode: string;
    isVerified: string;
}
export interface EditorState {
    content: ContentState;
}