export interface ApiResponse {
  next_change_id: string;
  stashes: Stash[];
}

export interface Stash {
  id: string;
  league: string;
  accountName: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  typeLine: string;
}
