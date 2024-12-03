interface IApiCallParams {
  path: string;
  limit?: number;
}

export default async function apiCall<T>({
  path,
  limit = 20,
}: IApiCallParams): Promise<{
  data: T[];
  error?: string;
}> {
  try {
    const res = await fetch(
      `https://api.rawg.io/api${path}?key=${process.env.API_KEY}&page_size=${limit}`
    );
    const data = await res.json();

    return {
      data: data?.results || data,
    };
  } catch (error) {
    return {
      error: `${error}`,
      data: [],
    };
  }
}
