class Users {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    token: string;
}

export const USERS: Users[] = [
    {
        id: 1,
        username: 'spiderman',
        firstName: 'Peter',
        lastName: 'Parker',
        password: '1234',
        token: 'fake-jwt-token'
    },
    {
        id: 2,
        username: 'ironman',
        firstName: 'Tony',
        lastName: 'Stark',
        password: '1234',
        token: 'fake-jwt-token2'
    }
];
