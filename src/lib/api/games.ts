'use server';

import apiCall from '@/lib/api/apiCall';
import { IApiResponseList, IApiResponseDetails } from '@/types/apiResponse';
import { IGame } from '@/types/game';

export async function getGames(): Promise<IApiResponseList<IGame>> {
  return apiCall<IApiResponseList<IGame>>({ path: '/games', limit: 20 });
}

export async function getGameBySlug(
  slug: string
): Promise<IApiResponseDetails<IGame>> {
  return apiCall<IApiResponseDetails<IGame>>({ path: `/games/${slug}` });
}
