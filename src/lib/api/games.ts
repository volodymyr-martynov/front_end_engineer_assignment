'use server';

import apiCall from '@/lib/api/apiCall';
import { IApiResponse } from '@/types/apiResponse';
import { IGame } from '@/types/game';

export async function getGames(): Promise<IApiResponse<IGame>> {
  return apiCall<IGame>({ path: '/games', limit: 20 });
}

export async function getGameBySlug(slug: string): Promise<any> {
  return apiCall<any>({ path: `/games/${slug}` });
}
