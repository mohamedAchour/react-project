export interface AccountState {
  [key: string]: string;
  username: string;
  password: string;
}

export interface AccountErrors {
  [key: string]: string | undefined;
  username?: string;
  password?: string;
}
