export interface IUserInterface {
    userName: string;
    userAge: number;
}

// generic classes
export class UserInterface<T> {
   // public data:T;
}

export class UserI1 extends UserInterface<IUserInterface> {
    public data: IUserInterface;
}