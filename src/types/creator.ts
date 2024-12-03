export interface ICreator {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_background: string;
  games_count: number;
  games: ICreatorGame[];
  positions: IPosition[];
}

interface ICreatorGame {
  id: number;
  slug: string;
  name: string;
  added: number;
}

interface IPosition {
  id: number;
  name: string;
  slug: string;
}
