import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";

export type Presence = {
  selectedCell: string | null;
};

export type Storage = {
  spreadsheet: LiveObject<{
    cells: LiveMap<string, LiveObject<Cell>>;
    columns: LiveList<LiveObject<Column>>;
    rows: LiveList<LiveObject<Row>>;
  }>;
};

export type UserInfo = {
  color: string;
  name: string;
  url: string;
};

export type UserMeta = {
  id: string;
  info: UserInfo;
};
