interface IApiCallParams {
  path: string;
  limit?: number;
}

export default async function apiCall<T>({
  path,
  limit = 20,
}: IApiCallParams): Promise<T | { error: string }> {
  try {
    const res = await fetch(
      `https://api.rawg.io/api${path}?key=${process.env.API_KEY}&page_size=${limit}`,
      {
        cache: 'force-cache',
        next: {
          revalidate: 3600,
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return {
      error: `${error}`,
    };
  }
}
