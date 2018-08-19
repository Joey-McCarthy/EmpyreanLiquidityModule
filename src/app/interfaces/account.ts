export interface Account {
  Name: string;
  AccountNum: number;
  ParentAcctNum?: number;
  ChildAccounts?: Account[];
}
