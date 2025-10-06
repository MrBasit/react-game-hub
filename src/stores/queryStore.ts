import { create } from "zustand";

export interface QueryObject {
  GenreId?: number;
  PlatformId?: number;
  Sort: SortItem | null;
  SearchText: string;
}

export interface SortItem {
  label: string;
  value: string;
}

interface queryState {
  GenreId?: number;
  PlatformId?: number;
  Sort?: SortItem;
  SearchText?: string;

  updateGenre: (GenreId: number) => void;
  updatePlatform: (PlatformId: number) => void;
  updateSort: (SortItem: SortItem) => void;
  updateSearch: (SearchText: string) => void;
}

let queryStore = create<queryState>(set => ({
  updateGenre: GenreId => set(() => ({ GenreId })),
  updatePlatform: PlatformId => set(() => ({ PlatformId })),
  updateSort: Sort => set(() => ({ Sort })),
  updateSearch: SearchText => set(() => ({ SearchText, PlatformId: undefined, Sort: undefined, GenreId: undefined }))
}));

export default queryStore;