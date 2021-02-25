export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface UserLogin {
    email: string,
    password: string
}
export interface UserUpdate {
    firstName?: string,
    lastName?: string,
    avatar?: string
    email?: string;
    [key: string]: any;
}
